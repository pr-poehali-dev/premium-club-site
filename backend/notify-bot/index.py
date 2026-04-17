import json
import os
import urllib.request


def handler(event: dict, context) -> dict:
    """
    Принимает POST с {telegram_id, first_name} и отправляет пользователю
    сообщение через Telegram Bot API о заявке на вступление в клуб.
    """
    if event.get("httpMethod") == "OPTIONS":
        return {
            "statusCode": 200,
            "headers": {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods": "POST, OPTIONS",
                "Access-Control-Allow-Headers": "Content-Type",
                "Access-Control-Max-Age": "86400",
            },
            "body": "",
        }

    body = json.loads(event.get("body") or "{}")
    telegram_id = body.get("telegram_id")
    first_name = body.get("first_name", "друг")

    if not telegram_id:
        return {
            "statusCode": 400,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "telegram_id required"}),
        }

    token = os.environ["TELEGRAM_BOT_TOKEN"]
    text = (
        f"Привет, {first_name}. Ты оставил заявку на вступление в клуб "
        f"AI Models Factory. Сейчас свяжусь с тобой лично, расскажу "
        f"условия и помогу оформить вступление. Буду в течение часа."
    )

    payload = json.dumps({
        "chat_id": telegram_id,
        "text": text,
    }).encode("utf-8")

    req = urllib.request.Request(
        f"https://api.telegram.org/bot{token}/sendMessage",
        data=payload,
        headers={"Content-Type": "application/json"},
        method="POST",
    )

    with urllib.request.urlopen(req) as resp:
        resp_data = json.loads(resp.read())

    if not resp_data.get("ok"):
        return {
            "statusCode": 500,
            "headers": {"Access-Control-Allow-Origin": "*"},
            "body": json.dumps({"error": "telegram api error", "detail": resp_data}),
        }

    return {
        "statusCode": 200,
        "headers": {"Access-Control-Allow-Origin": "*"},
        "body": json.dumps({"status": "ok"}),
    }
