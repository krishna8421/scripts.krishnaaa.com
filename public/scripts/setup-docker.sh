# Update system
sudo apt update

# Remove old docker if exists
for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt remove $pkg -y ; done

# Install Tools
sudo apt install ca-certificates curl gnupg unzip -y

# Add Docker’s official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Add Docker apt repository.
echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Update and upgrade
sudo apt update
sudo apt upgrade -y

# Install Docker Engine
sudo apt install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin -y

# Create the docker group
sudo groupadd docker

# Add user to docker group
sudo usermod -aG docker $USER

# Enable docker service
sudo systemctl enable docker.service
sudo systemctl enable containerd.service

# Restart VM
sudo reboot