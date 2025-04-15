pipeline {
  agent any

  stages {
    stage('Install Docker & Docker Compose') {
      steps {
        sh '''
          #!/bin/bash

          echo "Updating system..."
          apt-get update -y

          echo "Installing dependencies..."
          apt-get install -y \
            ca-certificates \
            curl \
            gnupg \
            lsb-release \
            apt-transport-https \
            software-properties-common

          echo "Adding Docker GPG key..."
          install -m 0755 -d /etc/apt/keyrings
          curl -fsSL https://download.docker.com/linux/ubuntu/gpg | gpg --dearmor -o /etc/apt/keyrings/docker.gpg
          chmod a+r /etc/apt/keyrings/docker.gpg

          echo "Setting up the Docker repo..."
          echo \
            "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
            $(lsb_release -cs) stable" | tee /etc/apt/sources.list.d/docker.list > /dev/null

          apt-get update -y

          echo "Installing Docker..."
          apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

          echo "Verifying Docker..."
          docker --version
          docker compose version
        '''
      }
    }

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
        sh 'docker compose up -d'
      }
    }
  }
}
