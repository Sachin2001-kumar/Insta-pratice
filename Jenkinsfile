pipeline {
  agent any

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/Sachin2001-kumar/Insta-pratice.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          docker.build("insta_practice")
        }
      }
    }

    stage('Run Tests') {
      steps {
        echo 'You can run Jest/Playwright etc here'
        // sh 'npm test'
      }
    }

    stage('Run Container') {
      steps {
        sh 'docker-compose up -d'
      }
    }
  }
}
