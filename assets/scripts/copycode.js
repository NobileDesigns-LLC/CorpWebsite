const codeBlocks = document.querySelectorAll('.highlight');

codeBlocks.forEach((highlightBlock) => {
  // Create the copy button
  const copyButton = document.createElement('button');
  copyButton.innerText = 'Copy';
  copyButton.className = 'copy-code-button';
  
  // Style the button for positioning
  copyButton.style.position = 'absolute';
  copyButton.style.top = '5px';
  copyButton.style.right = '5px';
  
  // Make the highlight block position relative
  highlightBlock.style.position = 'relative';
  
  // Append button to the highlight block
  highlightBlock.appendChild(copyButton);
  
  // Add click event listener
  copyButton.addEventListener('click', () => {
    // Get the code content from the nested code element
    const codeElement = highlightBlock.querySelector('code');
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