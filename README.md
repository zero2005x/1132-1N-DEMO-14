# 1132-1N-demo-14

## 顯示現有的上傳紀錄:

git log --pretty=format:"%h%09%an%09%ad%x09%s" --after="2025-02-19"

## 監聽 scss

npx sass --watch scss:css

## 監聽 Tailwindcss

npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
