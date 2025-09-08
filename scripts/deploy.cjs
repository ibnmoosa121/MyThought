#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Get the current Git branch name
 * @returns {string} Current branch name
 */
function getCurrentBranch() {
  try {
    const branch = execSync('git rev-parse --abbrev-ref HEAD', { encoding: 'utf8' }).trim();
    return branch;
  } catch (error) {
    console.error('❌ Error: Unable to detect Git branch');
    console.error('Make sure you are in a Git repository and have Git installed.');
    process.exit(1);
  }
}

/**
 * Execute the appropriate deploy command based on branch
 * @param {string} branch - Current branch name
 */
function deployBasedOnBranch(branch) {
  console.log(`🔍 Detected branch: ${branch}`);
  
  let deployCommand;
  let deployTarget;
  
  switch (branch) {
    case 'shadcnui':
      deployCommand = 'npm run deploy:shadcnui';
      deployTarget = 'ShadcnUI';
      break;
    case 'daisyui':
      deployCommand = 'npm run deploy:daisyui';
      deployTarget = 'DaisyUI';
      break;
    case 'main':
    case 'master':
      deployCommand = 'gh-pages -d dist';
      deployTarget = 'Main (root)';
      console.log('⚠️  Warning: Deploying from main/master branch to root directory');
      break;
    default:
      console.error(`❌ Error: Branch '${branch}' is not configured for deployment`);
      console.log('\n📋 Supported branches:');
      console.log('  • shadcnui  → deploys to /shadcnui/ subdirectory');
      console.log('  • daisyui   → deploys to /daisyui/ subdirectory');
      console.log('  • main      → deploys to root directory');
      console.log('  • master    → deploys to root directory');
      console.log('\n💡 Switch to a supported branch or use specific deploy commands:');
      console.log('  • npm run deploy:shadcnui');
      console.log('  • npm run deploy:daisyui');
      process.exit(1);
  }
  
  console.log(`🚀 Deploying ${deployTarget} variant...`);
  console.log(`📦 Running: ${deployCommand}`);
  
  try {
    // Set environment variable for Vite config
    if (branch === 'shadcnui' || branch === 'daisyui') {
      process.env.DEPLOY_TARGET = branch;
    }
    
    // Execute the deploy command
    execSync(deployCommand, { stdio: 'inherit' });
    
    console.log(`\n✅ Successfully deployed ${deployTarget} variant!`);
    
    // Show deployment URL
    const repoName = 'AIStarterTemplate'; // You can make this dynamic if needed
    let deployUrl;
    
    if (branch === 'shadcnui') {
      deployUrl = `https://yourusername.github.io/${repoName}/shadcnui/`;
    } else if (branch === 'daisyui') {
      deployUrl = `https://yourusername.github.io/${repoName}/daisyui/`;
    } else {
      deployUrl = `https://yourusername.github.io/${repoName}/`;
    }
    
    console.log(`🌐 Deployment URL: ${deployUrl}`);
    
  } catch (error) {
    console.error(`\n❌ Deployment failed for ${deployTarget} variant`);
    console.error('Error details:', error.message);
    process.exit(1);
  }
}

/**
 * Main function
 */
function main() {
  console.log('🔧 Smart Deploy Script');
  console.log('='.repeat(50));
  
  // Check if we're in the project root
  const packageJsonPath = path.join(process.cwd(), 'package.json');
  if (!fs.existsSync(packageJsonPath)) {
    console.error('❌ Error: package.json not found');
    console.error('Make sure you are in the project root directory.');
    process.exit(1);
  }
  
  // Get current branch and deploy
  const currentBranch = getCurrentBranch();
  deployBasedOnBranch(currentBranch);
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { getCurrentBranch, deployBasedOnBranch };