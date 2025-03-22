while ($true) {
    git add .
    git commit -m "Auto commit"
    git push origin master
    Start-Sleep -Seconds 5
} 
