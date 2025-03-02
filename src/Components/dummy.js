import React, { useEffect, useRef, useState } from 'react';

const LightTechClubBackground = () => {
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Technical domains with categories for visual grouping - updated for light theme
  const domains = [
    { text: "Neural Networks", category: "ai", size: 18 },
    { text: "Computer Vision", category: "ai", size: 17 },
    { text: "Quantum Computing", category: "emerging", size: 18 },
    { text: "Blockchain", category: "emerging", size: 16 },
    { text: "Machine Learning", category: "ai", size: 19 },
    { text: "Deep Learning", category: "ai", size: 18 },
    { text: "Edge Computing", category: "systems", size: 16 },
    { text: "NLP", category: "ai", size: 15 },
    { text: "Robotics", category: "hardware", size: 17 },
    { text: "VLSI Design", category: "hardware", size: 16 },
    { text: "Cyber Security", category: "security", size: 17 },
    { text: "Backend Systems", category: "systems", size: 16 },
    { text: "Web3", category: "emerging", size: 15 },
    { text: "Cloud Architecture", category: "systems", size: 17 },
    { text: "Data Science", category: "ai", size: 18 },
    { text: "AR/VR", category: "emerging", size: 16 },
    { text: "IoT", category: "hardware", size: 15 },
    { text: "Embedded Systems", category: "hardware", size: 16 },
    { text: "Algorithm Design", category: "theory", size: 17 },
    { text: "API Development", category: "systems", size: 16 },
    { text: "DevOps", category: "systems", size: 16 },
    { text: "UX/UI", category: "design", size: 15 }
  ];

  // Code snippets that will appear and fade in the background
  const codeSnippets = [
    { code: "function optimize(input) {\n  return input.map(x => x*2);\n}", language: "javascript" },
    { code: "def neural_network(x):\n  return activation(weights @ x + bias)", language: "python" },
    { code: "class Algorithm<T> {\n  public T process(T input) {\n    return transform(input);\n  }\n}", language: "java" },
    { code: "SELECT * FROM metrics\nWHERE accuracy > 0.95\nGROUP BY model;", language: "sql" },
    { code: "const train = async (params) => {\n  await model.fit(x, y, {epochs: 100});\n  return model.evaluate();\n}", language: "javascript" },
    { code: "#include <vector>\nvoid process(std::vector<int>& data) {\n  std::sort(data.begin(), data.end());\n}", language: "cpp" },
    { code: "model.compile(optimizer='adam',\n  loss='sparse_categorical_crossentropy',\n  metrics=['accuracy'])", language: "python" }
  ];

  // Light theme color palette for different categories
  const categoryColors = {
    ai: { text: '#0066CC', connections: 'rgba(0, 102, 204, 0.3)' },
    systems: { text: '#4B0082', connections: 'rgba(75, 0, 130, 0.3)' },
    hardware: { text: '#E91E63', connections: 'rgba(233, 30, 99, 0.3)' },
    emerging: { text: '#FF5722', connections: 'rgba(255, 87, 34, 0.3)' },
    security: { text: '#673AB7', connections: 'rgba(103, 58, 183, 0.3)' },
    theory: { text: '#009688', connections: 'rgba(0, 150, 136, 0.3)' },
    design: { text: '#FF9800', connections: 'rgba(255, 152, 0, 0.3)' }
  };

  // Language syntax highlighting colors - updated for light theme
  const languageColors = {
    javascript: '#F7DF1E',
    python: '#3776AB',
    java: '#007396',
    sql: '#E48E00',
    cpp: '#00599C'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    
    // Set canvas dimensions to match window
    const setCanvasDimensions = () => {
      const { innerWidth, innerHeight } = window;
      canvas.width = innerWidth;
      canvas.height = innerHeight;
      setDimensions({ width: innerWidth, height: innerHeight });
    };
    
    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);

    // Create domain objects with properties
    const domainElements = domains.map(domain => {
      const color = categoryColors[domain.category];
      return {
        ...domain,
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: Math.random() * 0.3 + 0.1,
        direction: Math.random() * Math.PI * 2,
        textColor: color.text,
        connectionColor: color.connections,
        pulsate: {
          active: true,
          min: 0.7, // Higher minimum for lighter theme
          max: 1.0,
          current: 0.8,
          increasing: true,
          speed: Math.random() * 0.004 + 0.002
        }
      };
    });
    
    // Setup connections between related domains (same category)
    const connections = [];
    domainElements.forEach((domain, i) => {
      // Connect with 2-3 domains from the same category
      const sameCategory = domainElements.filter((d, idx) => 
        d.category === domain.category && idx !== i
      );
      
      // Randomize but keep the number of connections reasonable
      const connectCount = Math.min(Math.floor(Math.random() * 2) + 1, sameCategory.length);
      
      for (let j = 0; j < connectCount; j++) {
        const randomIdx = Math.floor(Math.random() * sameCategory.length);
        const targetIdx = domainElements.indexOf(sameCategory[randomIdx]);
        
        if (targetIdx !== -1 && i !== targetIdx) {
          connections.push({
            source: i,
            target: targetIdx,
            opacity: 0.3, // Lower opacity for light theme
            pulsate: true,
            width: Math.random() * 0.8 + 0.4
          });
        }
      }
    });
    
    // Setup code snippet displays
    let activeSnippets = [];
    
    // Add a new code snippet at random intervals
    const addCodeSnippet = () => {
      if (activeSnippets.length < 3) {
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        const width = Math.random() * (canvas.width / 3) + 200;
        const height = Math.random() * (canvas.height / 3) + 150;
        
        activeSnippets.push({
          ...snippet,
          x: Math.random() * (canvas.width - width),
          y: Math.random() * (canvas.height - height),
          width,
          height,
          opacity: 0,
          fadeIn: true,
          fadeSpeed: 0.002,
          lifespan: Math.random() * 10000 + 5000,
          birth: Date.now(),
          textColor: languageColors[snippet.language] || '#555555'
        });
      }
      
      // Schedule next snippet
      setTimeout(addCodeSnippet, Math.random() * 7000 + 3000);
    };
    
    // Start the code snippet cycle
    setTimeout(addCodeSnippet, 2000);
    
    // Binary particles effect - modified for light theme
    const binaryParticles = [];
    const BINARY_PARTICLE_COUNT = 50;
    
    for (let i = 0; i < BINARY_PARTICLE_COUNT; i++) {
      binaryParticles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        text: Math.random() > 0.5 ? "1" : "0",
        size: Math.random() * 9 + 8,
        opacity: Math.random() * 0.2 + 0.05, // Lower opacity for light theme
        speed: Math.random() * 0.5 + 0.2,
      });
    }
    
    // Geometric nodes for light theme
    const geometricNodes = [];
    const NODE_COUNT = 25;
    
    const nodeShapes = ['circle', 'square', 'triangle', 'diamond'];
    
    for (let i = 0; i < NODE_COUNT; i++) {
      geometricNodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        shape: nodeShapes[Math.floor(Math.random() * nodeShapes.length)],
        size: Math.random() * 4 + 2,
        color: `rgba(${Math.random() * 120}, ${Math.random() * 120}, ${Math.random() * 200 + 55}, ${Math.random() * 0.2 + 0.1})`,
        pulsate: {
          active: true,
          min: 0.6,
          max: 1.0,
          current: 0.8,
          increasing: Math.random() > 0.5,
          speed: Math.random() * 0.01 + 0.005
        }
      });
    }
    
    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw a light gradient background
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.7
      );
      gradient.addColorStop(0, 'rgba(245, 247, 250, 0.98)');
      gradient.addColorStop(1, 'rgba(232, 236, 242, 0.97)');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw subtle grid pattern
      ctx.strokeStyle = 'rgba(180, 190, 210, 0.15)';
      ctx.lineWidth = 0.5;
      
      const gridSize = 40;
      for (let x = 0; x < canvas.width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      
      for (let y = 0; y < canvas.height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }
      
      // Draw binary particles
      binaryParticles.forEach(particle => {
        ctx.font = `${particle.size}px 'Courier New', monospace`;
        ctx.fillStyle = `rgba(70, 100, 180, ${particle.opacity})`;
        ctx.fillText(particle.text, particle.x, particle.y);
        
        // Move particles downward
        particle.y += particle.speed;
        
        // Reset particles that go off screen
        if (particle.y > canvas.height) {
          particle.y = -particle.size;
          particle.x = Math.random() * canvas.width;
        }
      });
      
      // Draw connections between domain elements
      connections.forEach(conn => {
        const source = domainElements[conn.source];
        const target = domainElements[conn.target];
        
        // Calculate distance for proximity effect
        const dx = target.x - source.x;
        const dy = target.y - source.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Only draw connections if domains are within reasonable distance
        if (distance < canvas.width / 3) {
          ctx.beginPath();
          ctx.moveTo(source.x, source.y);
          ctx.lineTo(target.x, target.y);
          
          // Adjust opacity based on distance (closer = more visible)
          const distanceOpacity = 1 - (distance / (canvas.width / 3));
          const finalOpacity = conn.opacity * distanceOpacity;
          
          ctx.strokeStyle = source.connectionColor.replace('0.3', finalOpacity.toFixed(2));
          ctx.lineWidth = conn.width;
          ctx.stroke();
          
          // Add data flow effects along the connections
          if (Math.random() > 0.99) { // Occasionally send data packets
            const dataPackets = Math.floor(Math.random() * 3) + 1;
            for (let i = 0; i < dataPackets; i++) {
              const progress = Math.random();
              const packetX = source.x + dx * progress;
              const packetY = source.y + dy * progress;
              
              ctx.beginPath();
              ctx.arc(packetX, packetY, 2, 0, Math.PI * 2);
              ctx.fillStyle = source.textColor;
              ctx.fill();
            }
          }
        }
      });
      
      // Draw and update domain positions
      domainElements.forEach(domain => {
        // Update position with gentle movement
        domain.x += Math.cos(domain.direction) * domain.speed;
        domain.y += Math.sin(domain.direction) * domain.speed;
        
        // Bounce off walls with slight direction change
        if (domain.x < 0 || domain.x > canvas.width) {
          domain.direction = Math.PI - domain.direction + (Math.random() * 0.2 - 0.1);
          domain.x = Math.max(0, Math.min(canvas.width, domain.x));
        }
        if (domain.y < 0 || domain.y > canvas.height) {
          domain.direction = -domain.direction + (Math.random() * 0.2 - 0.1);
          domain.y = Math.max(0, Math.min(canvas.height, domain.y));
        }
        
        // Update pulsating effect
        if (domain.pulsate.active) {
          if (domain.pulsate.increasing) {
            domain.pulsate.current += domain.pulsate.speed;
            if (domain.pulsate.current >= domain.pulsate.max) {
              domain.pulsate.increasing = false;
            }
          } else {
            domain.pulsate.current -= domain.pulsate.speed;
            if (domain.pulsate.current <= domain.pulsate.min) {
              domain.pulsate.increasing = true;
            }
          }
        }
        
        // Draw text with subtle shadow for light theme
        ctx.font = `bold ${domain.size}px 'Poppins', sans-serif`;
        const opacity = domain.pulsate.current.toFixed(2);
        ctx.fillStyle = domain.textColor;
        
        // Add a subtle shadow effect for better visibility on light background
        ctx.shadowColor = 'rgba(180, 180, 200, 0.3)';
        ctx.shadowBlur = 5;
        ctx.shadowOffsetX = 1;
        ctx.shadowOffsetY = 1;
        ctx.fillText(domain.text, domain.x, domain.y);
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
      });
      
      // Draw geometric nodes
      geometricNodes.forEach(node => {
        // Update pulsating effect
        if (node.pulsate.active) {
          if (node.pulsate.increasing) {
            node.pulsate.current += node.pulsate.speed;
            if (node.pulsate.current >= node.pulsate.max) {
              node.pulsate.increasing = false;
            }
          } else {
            node.pulsate.current -= node.pulsate.speed;
            if (node.pulsate.current <= node.pulsate.min) {
              node.pulsate.increasing = true;
            }
          }
        }
        
        const size = node.size * node.pulsate.current;
        
        // Draw different shapes
        switch(node.shape) {
          case 'circle':
            ctx.beginPath();
            ctx.arc(node.x, node.y, size, 0, Math.PI * 2);
            ctx.fillStyle = node.color;
            ctx.fill();
            break;
            
          case 'square':
            ctx.fillStyle = node.color;
            ctx.fillRect(node.x - size, node.y - size, size * 2, size * 2);
            break;
            
          case 'triangle':
            ctx.beginPath();
            ctx.moveTo(node.x, node.y - size);
            ctx.lineTo(node.x + size, node.y + size);
            ctx.lineTo(node.x - size, node.y + size);
            ctx.closePath();
            ctx.fillStyle = node.color;
            ctx.fill();
            break;
            
          case 'diamond':
            ctx.beginPath();
            ctx.moveTo(node.x, node.y - size * 1.5);
            ctx.lineTo(node.x + size, node.y);
            ctx.lineTo(node.x, node.y + size * 1.5);
            ctx.lineTo(node.x - size, node.y);
            ctx.closePath();
            ctx.fillStyle = node.color;
            ctx.fill();
            break;
        }
        
        // Occasionally draw decorative lines
        if (Math.random() > 0.998) {
          const lineLength = Math.random() * 60 + 30;
          const angle = Math.random() * Math.PI * 2;
          
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(
            node.x + Math.cos(angle) * lineLength,
            node.y + Math.sin(angle) * lineLength
          );
          ctx.strokeStyle = node.color.replace('0.2', '0.4');
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      });
      
      // Draw code snippets with professional syntax highlighting
      const currentTime = Date.now();
      activeSnippets = activeSnippets.filter(snippet => {
        // Handle fading in/out
        if (snippet.fadeIn) {
          snippet.opacity += snippet.fadeSpeed;
          if (snippet.opacity >= 0.75) {
            snippet.opacity = 0.75;
            snippet.fadeIn = false;
          }
        }
        
        // Check lifespan
        if (currentTime - snippet.birth > snippet.lifespan) {
          snippet.opacity -= snippet.fadeSpeed * 2;
          if (snippet.opacity <= 0) {
            return false; // Remove from active snippets
          }
        }
        
        // Draw snippet background - elegant glass effect for light theme
        const radius = 10;
        
        // Create blurred shadow for glass effect
        ctx.shadowColor = 'rgba(150, 160, 180, 0.2)';
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 5;
        ctx.shadowOffsetY = 5;
        
        // Fill with semi-transparent white
        ctx.fillStyle = `rgba(255, 255, 255, ${snippet.opacity * 0.9})`;
        
        // Draw rounded rectangle for code block
        ctx.beginPath();
        ctx.moveTo(snippet.x + radius, snippet.y);
        ctx.lineTo(snippet.x + snippet.width - radius, snippet.y);
        ctx.arcTo(snippet.x + snippet.width, snippet.y, snippet.x + snippet.width, snippet.y + radius, radius);
        ctx.lineTo(snippet.x + snippet.width, snippet.y + snippet.height - radius);
        ctx.arcTo(snippet.x + snippet.width, snippet.y + snippet.height, snippet.x + snippet.width - radius, snippet.y + snippet.height, radius);
        ctx.lineTo(snippet.x + radius, snippet.y + snippet.height);
        ctx.arcTo(snippet.x, snippet.y + snippet.height, snippet.x, snippet.y + snippet.height - radius, radius);
        ctx.lineTo(snippet.x, snippet.y + radius);
        ctx.arcTo(snippet.x, snippet.y, snippet.x + radius, snippet.y, radius);
        ctx.closePath();
        
        ctx.fill();
        
        // Border
        ctx.strokeStyle = `rgba(180, 190, 210, ${snippet.opacity * 0.7})`;
        ctx.lineWidth = 1;
        ctx.stroke();
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        
        // Draw code content
        ctx.font = "14px 'JetBrains Mono', monospace";
        ctx.fillStyle = `rgba(60, 70, 80, ${snippet.opacity})`;
        
        // Simple syntax highlighting for the snippet
        const lines = snippet.code.split('\n');
        let lineY = snippet.y + 25;
        
        lines.forEach(line => {
          ctx.fillStyle = `rgba(60, 70, 80, ${snippet.opacity})`;
          
          // Highlight keywords
          const keywords = ['function', 'return', 'class', 'public', 'void', 'const', 'let', 'var', 'def', 'import', 'async', 'await', 'SELECT', 'FROM', 'WHERE', 'GROUP'];
          const operators = ['=>', '=', '+', '*', '@', '<', '>', '()', '{}', '[]'];
          
          let highlightedLine = line;
          keywords.forEach(keyword => {
            if (line.includes(keyword)) {
              highlightedLine = highlightedLine.replace(
                new RegExp(`\\b${keyword}\\b`, 'g'), 
                `{%${keyword}%}`
              );
            }
          });
          
          if (highlightedLine.includes('{%')) {
            const parts = highlightedLine.split(/(\{%.*?%\})/g);
            let xPos = snippet.x + 15;
            
            parts.forEach(part => {
              if (part.startsWith('{%') && part.endsWith('%}')) {
                // This is a keyword
                const keyword = part.substring(2, part.length - 2);
                ctx.fillStyle = `rgba(${snippet.textColor.substring(1)}, ${snippet.opacity})`;
                ctx.fillText(keyword, xPos, lineY);
                xPos += ctx.measureText(keyword).width;
              } else if (part) {
                // Highlight strings
                if (part.includes('"') || part.includes("'")) {
                  const stringParts = part.split(/(['"].*?['"])/g);
                  
                  stringParts.forEach(stringPart => {
                    if ((stringPart.startsWith('"') && stringPart.endsWith('"')) || 
                        (stringPart.startsWith("'") && stringPart.endsWith("'"))) {
                      // String content
                      ctx.fillStyle = `rgba(80, 160, 80, ${snippet.opacity})`;
                    } else {
                      // Regular text
                      ctx.fillStyle = `rgba(60, 70, 80, ${snippet.opacity})`;
                    }
                    ctx.fillText(stringPart, xPos, lineY);
                    xPos += ctx.measureText(stringPart).width;
                  });
                } else {
                  // Regular text
                  ctx.fillStyle = `rgba(60, 70, 80, ${snippet.opacity})`;
                  ctx.fillText(part, xPos, lineY);
                  xPos += ctx.measureText(part).width;
                }
              }
            });
          } else {
            ctx.fillText(line, snippet.x + 15, lineY);
          }
          
          lineY += 20;
        });
        
        // Add language indicator with modern badge style
        const langText = snippet.language;
        const langWidth = ctx.measureText(langText).width + 16;
        
        // Language badge
        const badgeX = snippet.x + snippet.width - langWidth - 10;
        const badgeY = snippet.y + 10;
        
        ctx.fillStyle = `rgba(240, 240, 240, ${snippet.opacity})`;
        
        // Rounded rectangle for badge
        ctx.beginPath();
        ctx.moveTo(badgeX + 5, badgeY);
        ctx.lineTo(badgeX + langWidth - 5, badgeY);
        ctx.arcTo(badgeX + langWidth, badgeY, badgeX + langWidth, badgeY + 5, 5);
        ctx.lineTo(badgeX + langWidth, badgeY + 15);
        ctx.arcTo(badgeX + langWidth, badgeY + 20, badgeX + langWidth - 5, badgeY + 20, 5);
        ctx.lineTo(badgeX + 5, badgeY + 20);
        ctx.arcTo(badgeX, badgeY + 20, badgeX, badgeY + 15, 5);
        ctx.lineTo(badgeX, badgeY + 5);
        ctx.arcTo(badgeX, badgeY, badgeX + 5, badgeY, 5);
        ctx.closePath();
        
        ctx.fill();
        
        // Language text
        ctx.font = "12px 'JetBrains Mono', monospace";
        ctx.fillStyle = `rgba(${snippet.textColor.substring(1)}, ${snippet.opacity})`;
        ctx.fillText(langText, badgeX + 8, badgeY + 14);
        
        return true;
      });

      // Add occasional elegant wave patterns
      if (Math.random() > 0.997) {
        const waveY = Math.random() * canvas.height;
        const amplitude = Math.random() * 15 + 5;
        const length = Math.random() * canvas.width * 0.5 + canvas.width * 0.3;
        const startX = Math.random() * (canvas.width - length);
        const endX = startX + length;
        
        ctx.beginPath();
        ctx.moveTo(startX, waveY);
        
        for (let x = startX; x <= endX; x += 5) {
          const progress = (x - startX) / length;
          const fadeOpacity = Math.sin(progress * Math.PI); // Fade in and out
          
          // Create a sinusoidal wave pattern
          const y = waveY + Math.sin((x - startX) / 20) * amplitude * fadeOpacity;
          
          ctx.lineTo(x, y);
        }
        
        // Create gradient for wave
        const gradient = ctx.createLinearGradient(startX, waveY, endX, waveY);
        gradient.addColorStop(0, 'rgba(100, 120, 220, 0)');
        gradient.addColorStop(0.5, 'rgba(100, 120, 220, 0.2)');
        gradient.addColorStop(1, 'rgba(100, 120, 220, 0)');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
      }
      
      animationFrameId = window.requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasDimensions);
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: '#F1F5F9' }}
    />
  );
};

// Background wrapper component to easily integrate into your existing layout
const LightTechBackgroundWrapper = ({ children }) => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800">
      <LightTechClubBackground />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default LightTechBackgroundWrapper;