pipeline {
  agent {
    docker {
      image 'docker:24.0.5-dind' // You can change to a newer version or custom image
      args '-v /var/run/docker.sock:/var/run/docker.sock' // gives container access to host docker
    }
  }

  environment {
    DOCKER_BUILDKIT = '1'
  }

  stages {
    stage('Clone Repo') {
      steps {
        git 'https://github.com/Sachin2001-kumar/Insta-pratice.git'
      }
    }

    stage('Build Docker Image') {
      steps {
        sh 'docker build -t insta_practice .'
      }
    }

    stage('Run Container') {
      steps {
        sh 'docker-compose up -d'
      }
    }

    stage('Run Tests') {
      steps {
        echo 'Running tests...'
        // You can add test commands here, like:
        // sh 'npm install && npm test'
      }
    }
  }

  post {
    always {
      echo 'Cleaning up...'
      sh 'docker-compose down || true'
    }
  }
}
