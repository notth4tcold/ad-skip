import pyautogui
import time
import sys

while True:
    time.sleep(5)
    print("Trying to find ad button...")
    if (pyautogui.locateOnScreen('ad.png', grayscale=True) != None):
        print("Found ad button")
        currentMouseX, currentMouseY = pyautogui.position()
        x, y = pyautogui.locateCenterOnScreen('ad.png')
        pyautogui.moveTo(x, y)
        pyautogui.click()
        pyautogui.moveTo(currentMouseX, currentMouseY)
