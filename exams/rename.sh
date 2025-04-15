#!/bin/bash

# --- 配置 ---
RootDir="C:\Users\liangtinglin\Documents\淡江課程\javascript課程\1132-1N-DEMO-14"
LogFile="$RootDir/rename_log_$(date +%Y%m%d_%H%M%S).txt" # 新增：日誌檔案路徑
# 要尋找和替換的字串對 (將 "_14" 改為 "_14"，依此類推，第二行Lin改成你的完整姓名，第三行14改成你的完整學號)
FindString_ReplacePairs=(
    "_xx:_14"
    "Hsingtai Chung:Liang-Ting Lin"
    "htchung:LTLin"
    "123456789:913410014"
)

# --- 函數：替換字串 ---
# $1: 原始字串
replace_string() {
    local original="$1"
    # 遍歷所有的替換對
    for pair in "${FindString_ReplacePairs[@]}"; do
        # 分割 "find:replace" 字串
        IFS=":" read -r find replace <<< "$pair"
        original="${original//$find/$replace}"
    done
    echo "$original"
}

# --- 驗證 ---
if [ ! -d "$RootDir" ]; then
    echo "錯誤：指定的根目錄 '$RootDir' 不存在或不是一個資料夾。" >&2
    exit 1
fi

# --- 初始化日誌檔案 ---
echo "腳本執行日誌 - $(date)" > "$LogFile"
echo "==============================" >> "$LogFile"
echo "根目錄: $RootDir" >> "$LogFile"
echo "處理的替換字典：" >> "$LogFile"
for pair in "${FindString_ReplacePairs[@]}"; do
    echo "$pair" >> "$LogFile"
done
echo "==============================" >> "$LogFile"
echo "" >> "$LogFile"
echo "日誌檔案已建立於: $LogFile" # 告知使用者日誌檔案位置

echo "開始執行腳本..."
echo "根目錄: $RootDir"
echo "處理的替換字典："
for pair in "${FindString_ReplacePairs[@]}"; do
    echo "$pair"
done

# --- 重新命名資料夾 ---
echo -e "\n--- 正在重新命名資料夾 ---"
echo "資料夾重命名記錄:" >> "$LogFile"
find "$RootDir" -depth -type d -print0 | while IFS= read -r -d $'\0' oldDir; do
    if [ ! -d "$oldDir" ]; then
        continue  # 如果不是資料夾，跳過
    fi

    # 替換資料夾名稱中的字串
    newDirName=$(replace_string "$(basename "$oldDir")")
    parentDir=$(dirname "$oldDir")
    newFullName="$parentDir/$newDirName"

    # 如果資料夾名稱被更改，進行重命名
    if [ "$oldDir" != "$newFullName" ]; then
        echo "重新命名資料夾: '$oldDir' -> '$newFullName'"
        if [ -e "$newFullName" ]; then
            echo "警告：目標名稱 '$newFullName' 已存在，跳過重命名 '$oldDir'" >&2
            echo "跳過 (已存在): '$oldDir' -> '$newFullName'" >> "$LogFile"
        else
            if mv -v "$oldDir" "$newFullName"; then
                 echo "重命名: '$oldDir' -> '$newFullName'" >> "$LogFile"
            else
                 echo "錯誤：重新命名資料夾 '$oldDir' 失敗。" >&2
                 echo "失敗: '$oldDir' -> '$newFullName'" >> "$LogFile"
            fi
        fi
    else
        # echo "跳過資料夾 (名稱無變化): $oldDir" # 可選：取消註解以顯示未變更的資料夾
        : # Do nothing if name hasn't changed
    fi
done
echo "" >> "$LogFile" # 在日誌中添加空行

# --- 重新命名檔案 ---
echo -e "\n--- 正在重新命名檔案 ---"
echo "檔案重命名記錄:" >> "$LogFile"
find "$RootDir" -depth -type f -print0 | while IFS= read -r -d $'\0' oldFile; do
    if [ ! -f "$oldFile" ]; then
        continue  # 如果不是檔案，跳過
    fi

    fileName=$(basename "$oldFile")
    parentDir=$(dirname "$oldFile")
    newName=$(replace_string "$fileName")

    # 如果檔案名稱被更改，進行重命名
    if [ "$fileName" != "$newName" ]; then
        newFullName="$parentDir/$newName"
        echo "重新命名檔案: '$oldFile' -> '$newFullName'"
        if [ -e "$newFullName" ]; then
            echo "警告：目標名稱 '$newFullName' 已存在，跳過重命名 '$oldFile'" >&2
            echo "跳過 (已存在): '$oldFile' -> '$newFullName'" >> "$LogFile"
        else
             if mv -v "$oldFile" "$newFullName"; then
                 echo "重命名: '$oldFile' -> '$newFullName'" >> "$LogFile"
             else
                 echo "錯誤：重新命名檔案 '$oldFile' 失敗。" >&2
                 echo "失敗: '$oldFile' -> '$newFullName'" >> "$LogFile"
             fi
        fi
    else
        # echo "跳過檔案 (名稱無變化): $oldFile" # 可選：取消註解以顯示未變更的檔案
        : # Do nothing if name hasn't changed
    fi
done
echo "" >> "$LogFile" # 在日誌中添加空行

# --- 替換檔案內容 ---
echo -e "\n--- 正在替換檔案內容 ---"
echo "檔案內容修改記錄:" >> "$LogFile"
# 遍歷所有檔案，替換檔案內的字串
find "$RootDir" -type f -print0 | while IFS= read -r -d $'\0' filePath; do
    # 跳過日誌檔案本身
    if [ "$filePath" == "$LogFile" ]; then
        continue
    fi

    if [ ! -f "$filePath" ]; then
        continue  # 如果不是檔案，跳過
    fi

    echo "處理檔案: $filePath"
    file_modified=false # 標記此檔案是否有被修改
    modification_details="" # 儲存此檔案的修改細節

    for pair in "${FindString_ReplacePairs[@]}"; do
        IFS=":" read -r find replace <<< "$pair"

        # 檢查檔案是否包含指定的字串 (忽略大小寫)，並取得行號
        # 使用 grep -n 取得行號，grep -i 忽略大小寫
        match_output=$(LC_ALL=C grep -n -i "$find" "$filePath")

        if [ $? -eq 0 ]; then # 如果 grep 找到匹配項 (結束狀態為 0)
            echo "  找到 '$find'，開始替換..."
            # 提取行號，並用逗號連接
            line_numbers=$(echo "$match_output" | cut -d: -f1 | paste -sd,)

            tmp_file=$(mktemp)

            # 使用 sed 進行替換 (s///g 全域替換, I 忽略大小寫)
            if sed "s/${find}/${replace}/gI" "$filePath" > "$tmp_file"; then
                # 比較原始檔案和暫存檔案是否有差異
                if ! cmp -s "$filePath" "$tmp_file"; then
                    mv "$tmp_file" "$filePath"
                    echo "  替換完成: $filePath"
                    # 記錄修改細節
                    modification_details+="  - 替換 '$find' -> '$replace' 於行: $line_numbers\n"
                    file_modified=true
                else
                    echo "  替換 '$find' -> '$replace' 未造成實際變更，跳過。"
                    rm -f "$tmp_file" # 刪除未變更的暫存檔
                fi
            else
                echo "錯誤：替換檔案內容失敗。" >&2
                rm -f "$tmp_file" # 替換失敗也要刪除暫存檔
            fi
        else
            # echo "  未找到 '$find'，跳過檔案內容替換。" # 可選：取消註解以顯示未找到的狀況
            : # Do nothing if string not found
        fi
    done

    # 如果檔案有被修改，則寫入日誌
    if [ "$file_modified" = true ]; then
        echo "檔案: $filePath" >> "$LogFile"
        echo -e "$modification_details" >> "$LogFile" # 使用 echo -e 來解釋換行符 \n
    fi
done

echo -e "\n腳本執行完畢。"
echo "詳細變更記錄已儲存至: $LogFile"