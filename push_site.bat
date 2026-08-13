@echo off
title GameScout Web Sitesi GitHub Yukleyici
set PATH=%PATH%;C:\Users\ereke\AppData\Roaming\kimi-desktop\daimon-bundle\runtime\git\cmd;C:\Users\ereke\AppData\Roaming\kimi-desktop\daimon-bundle\runtime\git\mingw64\bin
set GIT_EXE="C:\Users\ereke\AppData\Roaming\kimi-desktop\daimon-bundle\runtime\git\cmd\git.exe"

echo GameScout Web Sitesi v0.3 Guncelleme
echo ---------------------------------
echo Degisiklikler ekleniyor ve kaydediliyor...
%GIT_EXE% add .
%GIT_EXE% commit -m "Update GameScout Web Site and official APKPure link to v0.3.2"
echo GitHub'a yukleniyor...
%GIT_EXE% push origin main --force
echo ---------------------------------
echo Islem tamamlandi! Siteniz ve v0.3 APK baglantisi guncellendi.
pause

