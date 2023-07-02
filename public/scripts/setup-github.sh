# Update system
sudo apt update

# Install curl
sudo apt install curl -y

# Get keyring for github cli
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg

# Add github cli to apt
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null

# Update system
sudo apt update

# Install github cli
sudo apt install gh -y

# Create SSH key
read -p "Enter email for github: " email
ssh-keygen -t ed25519 -b 4096 -C "$email" -f ~/.ssh/github_ssh -N ""

# Add SSH key to github
gh auth login --git-protocol ssh --hostname GitHub.com <<< ~/.ssh/github_ssh.pub

# Setup git
gh auth setup-git

# Success message
echo "Github setup complete!"