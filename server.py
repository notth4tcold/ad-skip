import pyautogui
from flask import Flask

pyautogui.FAILSAFE = False

app = Flask(__name__)

@app.route("/skipAd")
def skip_add():
    currentMouseX, currentMouseY = pyautogui.position()
    pyautogui.click(160, 220)
    pyautogui.moveTo(currentMouseX, currentMouseY)
    return "<p>OK!</p>"

if __name__ == "__main__":
    app.run()