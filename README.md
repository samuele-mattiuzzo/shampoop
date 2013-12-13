SHAMPOOP
========

REQUIREMENTS:
-------------

- Mobile app:
    * [Python][python-install]
    * [Node.js][node-install]
    * [Cordova][cordova-install]

INSTALLING PHONEGAP AND CORDOVA:
--------------------------------

Make sure you have both [python][python-install] and [node][node-install] already installed on your system.
Following [this guide][android-sdk-guide], here are the needed info to download and setup the Android SDK:

- Download both [the SDK][sdk-download] and the [ADT bundle][adt-download].
- Open your *.bashrc* file and add this line in it:

        export PATH=${PATH}:/path/to/android-sdk/platform-tools:/path/to/android-sdk/tools

- Source your *.bashrc*

Once you've done that, open up your favourite shell and install [Phonegap][phonegap-install]:

    $ sudo npm install -g phonegap

Once this is completed, you need to install [Cordova][cordova-install]:

    $ sudo npm install -g cordova

Checkout this repo, cd into the directory. At this point, you need to tell where each SDK lives.

- ANDROID:
    * cd into platforms/android/
    * open local.properties (create, if it doesn't exist)
    * change sdk.dir accordingly (eg: /Users/smattiuzzo/Workspace/SDK/android_sdk)

- iOS:
    * TBD

DEVICE SETUP:
-------------

Android:
- Make sure your device has the option *Usb debugging* and *Developer options* enabled

iOS:
- TBD

RUNNING THE APP:
----------------

Make sure your device is connected to your laptop trough a usb cable.
Cd into your project's directory and run the following:

    $ /path/to/shampoop/copy/shampoop/: phonegap local run [android/ios]

The app will automatically be installed and launched on your connected device.

While developing, you may want some logging. With Android:

    $ /path/to/shampoop/copy/: ./platforms/android/cordova/log


[python-install]: http://python.org/ "Install python"
[node-install]: http://nodejs.org/ "Install node"
[cordova-install]: http://cordova.apache.org/docs/en/3.0.0/guide_overview_index.md.html#Overview "Install cordova"
[android-sdk-guide]: http://docs.phonegap.com/en/edge/guide_platforms_android_index.md.html "Android SDK guide"
[phonegap-install]: http://www.google.com "Install phonegap"
[plugin-helper]: https://github.com/samuele-mattiuzzo/auto-rpg/blob/master/utils/app_plugins_install.py "Python helper script"
[sdk-download]: http://developer.android.com/sdk/index.html "SDK download"
[adt-download]: http://developer.android.com/tools/sdk/eclipse-adt.html#installing "ADT download"
