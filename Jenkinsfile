pipeline {
    agent any

    stages {
        stage('Clone Repo') {
            steps {
                git 'https://github.com/your-repo/node-app.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Application') {
            steps {
                sh 'nohup node app.js &'  // Use `&` to run in the background
            }
        }

        stage('Trigger Pipeline 2') {
            steps {
                script {
                    def userData = "Kuber,22,Blue"  // Replace with real input collection logic
                    build job: 'Bash-Project-Pipeline', 
                          parameters: [string(name: 'USER_DATA', value: userData)]
                }
            }
        }
    }
}
