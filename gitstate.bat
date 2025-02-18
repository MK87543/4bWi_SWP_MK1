@echo off
setlocal enabledelayedexpansion
 
:: Check if required parameters are provided
if "%~1"=="" (
  echo Usage: %0 ^<date^> ^<file^>
  exit /b 1
)
 
:: Get the commit hash since the provided date
set OLDEST_COMMIT=
for /f "delims=" %%i in ('git log --since="%~1" --format="%%H"') do set OLDEST_COMMIT=%%i
 
:: Temporary output file for diff
set TEMP_OUTPUT_FILE=changes_temp_%~1.txt
git diff %OLDEST_COMMIT% -- "." > "%TEMP_OUTPUT_FILE%"
 
:: Count added lines (+) in the specified file
set ADDED_LINES=0
for /f "tokens=*" %%i in ('findstr /r "^+" "%TEMP_OUTPUT_FILE%" ^| findstr /v "^+++"') do (
    set /a ADDED_LINES+=1
)
 
:: Count removed lines (-) in the specified file
set REMOVED_LINES=0
for /f "tokens=*" %%i in ('findstr /r "^-" "%TEMP_OUTPUT_FILE%" ^| findstr /v "^---"') do (
    set /a REMOVED_LINES+=1
)
 
:: Final output file including added lines in name
set OUTPUT_FILE=changes_%~1_added_%ADDED_LINES%.diff
move "%TEMP_OUTPUT_FILE%" "%OUTPUT_FILE%"
 
:: Display results
echo File:  %OUTPUT_FILE%
echo Added lines: %ADDED_LINES%
echo Removed lines: %REMOVED_LINES%
 
endlocal

hat Kontextmenü