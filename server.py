import pyautogui
import time
import sys

while True:
    time.sleep(1)
    print("Trying to find ad button...")
    if (pyautogui.locateOnScreen('ad.png', confidence=0.6) != None):
        print("Found ad button")
        currentMouseX, currentMouseY = pyautogui.position()
        x, y = pyautogui.locateCenterOnScreen('ad.png', confidence=0.8)
        pyautogui.moveTo(x, y)
        pyautogui.click()
        pyautogui.moveTo(currentMouseX, currentMouseY)
