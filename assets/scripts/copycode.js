alert('copycode.js loaded');
const codeBlocks = document.querySelectorAll('.highlighter-rouge');

codeBlocks.forEach((block) => {
  // Create the copy button
  const copyButton = document.createElement('button');
  copyButton.innerText = 'Copy';
  copyButton.className = 'copy-code-button';
  
  // Style the button for positioning
  copyButton.style.position = 'absolute';
  copyButton.style.top = '5px';
  copyButton.style.right = '5px';
  
  // Make the block position relative
  block.style.position = 'relative';
  
  // Append button to the highlighter-rouge block
  block.appendChild(copyButton);
  
  // Add click event listener
  copyButton.addEventListener('click', () => {
    // Get the code content from the nested code element
    const codeElement = block.querySelector('code');
    const code = codeElement ? codeElement.innerText : '';
    
    // Copy to clipboard
    window.navigator.clipboard.writeText(code);
    
    // Update button text
    copyButton.innerText = 'Copied!';
    copyButton.classList.add('copied');
    
    // Reset after 2 seconds
    setTimeout(() => {
      copyButton.innerText = 'Copy';
      copyButton.classList.remove('copied');
    }, 2000);
  });
});