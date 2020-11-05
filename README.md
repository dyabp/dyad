## Gulp Quick Start


1. Download the latest theme source from the marketplace.

2. Download and install Node.js from nodejs.org/en/download/. The suggested version to install is 12.18.x LTS.

3. Start command prompt window or terminal and change directory to root folder of AdminComponent.

    ```cmd
    cd AdminComponent
    ```

4. Install the latest npm.
 
    ```cmd
    npm install --global npm@latest
    ```
    > Use npm cache clean --force command, if installation had failed at any step. Retry from start after it done.

5. Gulp is a toolkit that helps you automate your time-consuming tasks in development workflow. To install gulp globally.
    ```cmd
    npm install --global gulp-cli
    ```
    If you have previously installed a version of gulp globally, remove it to make sure old version doesn't collide with new gulp-cli.
    ```cmd
    npm rm --global gulp
    ```
    Verify that gulp in successfully installed, and version of installed gulp will appear.
    ```cmd
    gulp --version
    ```

6. Install yarn dependencies.
    ```cmd
    npm install
    ```

7. This below command will compile all the assets(sass, js) to dist folder, and start localhost server.
     ```cmd
    npm start
    ```