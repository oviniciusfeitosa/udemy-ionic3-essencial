# Configure Android Environment

 * ```sudo nano ~/.zshrc```
 * Add lines below :
    ```
        ANDROID_HOME="/home/vinnyfs89/Android/Sdk"
        export JAVA_HOME='/usr/libexec/java_home/ -v 1.8' 
        export PATH="/home/vinnyfs89/Android/Sdk/tools:$PATH"
        export PATH="/home/vinnyfs89/Android/Sdk/tools/bin:$PATH"
        export PATH="/home/vinnyfs89/Android/Sdk/platform-tools:$PATH"
    ```
 * Download [Android Stúdio](https://dl.google.com/dl/android/studio/ide-zips/3.0.1.0/android-studio-ide-171.4443003-linux.zip) : 
 * Open Android Stúdio > Configurações > Appearence & Behavior > System Settings > Android SDK > SDK Platforms > Install > Select follow itens below:
     ```
        Android 7.1.1
        Android 6.0
    ```