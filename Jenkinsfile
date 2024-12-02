pipeline {
    agent any

    stages {
        stage('Cloner le Code') {
            steps {
                git 'https://github.com/ndouadi/calculatrice-appweb-jenkins.git'
            }
        }

        stage('Construire l\'Image Docker') {
            steps {
                script {
                    dockerImage = docker.build("myapp:${env.BUILD_ID}")
                }
            }
        }

        stage('Déployer en Test') {
            steps {
                script {
                    sh 'docker rm -f myapp-test || true'
                    dockerImage.run("-d -p 3001:3000 -e MESSAGE='Environnement de Test' --name myapp-test")
                }
            }
        }

        stage('Tests') {
            steps {
                sh 'sleep 5' // Attendre que le conteneur démarre
                sh 'curl http://localhost:8085'
            }
        }

        stage('Déployer en Production') {
            when {
                script {
                    def userInput = input(
                        message: 'Voulez-vous déployer en production ?',
                        ok: 'Déployer',
                        parameters: []
                    )
                }
            }
            steps {
                script {
                    sh 'docker rm -f myapp-prod || true'
                    dockerImage.run("-d -p 3000:3000 -e MESSAGE='Environnement de Production' --name myapp-prod")
                }
            }
        }
    }

    post {
        always {
            script {
                sh 'docker rm -f myapp-test || true'
            }
        }
    }
}

