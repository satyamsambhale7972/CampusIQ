const CAMPUSIQ_STUDENTS = [
  {
    "id": "stu_252921201",
    "student_id": "252921201",
    "password": "student123",
    "full_name": "Satyam Sambhale",
    "email": "satyam.sambhale@campusiq.edu",
    "phone_number": "+91 79721 21395",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.84",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 93.1,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 32,
        "total": 38
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 32
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 32
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 31
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 41,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921202",
    "student_id": "252921202",
    "password": "student123",
    "full_name": "Aarav Sharma",
    "email": "aarav.sharma@campusiq.edu",
    "phone_number": "+91 79721 10851",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.15",
    "academic_standing": "First Class (Attendance Shortage Warning)",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 64.8,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "attended": 23,
        "total": 38,
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ]
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "attended": 20,
        "total": 32,
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ]
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "attended": 21,
        "total": 35,
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ]
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 4,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub 2",
        "cabin": "AI & Robotics Lab, Cabin 04",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "attended": 18,
        "total": 30,
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ]
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Network Systems Tower, Cabin 108",
        "office_hours": "Tue, Fri 09:30 AM \u2013 11:00 AM",
        "attended": 26,
        "total": 41,
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ]
      }
    ]
  },
  {
    "id": "stu_252921203",
    "student_id": "252921203",
    "password": "student123",
    "full_name": "Priya Sharma",
    "email": "priya.sharma@campusiq.edu",
    "phone_number": "+91 79721 15695",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.45",
    "academic_standing": "Chancellor's Gold Medalist",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 92.4,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "attended": 36,
        "total": 38,
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ]
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "attended": 30,
        "total": 32,
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ]
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "attended": 33,
        "total": 35,
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ]
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 4,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub 2",
        "cabin": "AI & Robotics Lab, Cabin 04",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "attended": 28,
        "total": 30,
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ]
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Network Systems Tower, Cabin 108",
        "office_hours": "Tue, Fri 09:30 AM \u2013 11:00 AM",
        "attended": 39,
        "total": 41,
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ]
      }
    ]
  },
  {
    "id": "stu_252921204",
    "student_id": "252921204",
    "password": "student123",
    "full_name": "Rohan Deshmukh",
    "email": "rohan.deshmukh@campusiq.edu",
    "phone_number": "+91 79721 39871",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.40",
    "academic_standing": "First Class (Borderline Attendance)",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.5,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "attended": 29,
        "total": 38,
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ]
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "attended": 25,
        "total": 32,
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ]
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "attended": 27,
        "total": 35,
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ]
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 4,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub 2",
        "cabin": "AI & Robotics Lab, Cabin 04",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "attended": 23,
        "total": 30,
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ]
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Network Systems Tower, Cabin 108",
        "office_hours": "Tue, Fri 09:30 AM \u2013 11:00 AM",
        "attended": 32,
        "total": 41,
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ]
      }
    ]
  },
  {
    "id": "stu_252921205",
    "student_id": "252921205",
    "password": "student123",
    "full_name": "Suraj Mehta",
    "email": "suraj.mehta4@campusiq.edu",
    "phone_number": "+91 79721 89840",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.4",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 88.6,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 37
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 32
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 35
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 36,
        "total": 40
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921206",
    "student_id": "252921206",
    "password": "student123",
    "full_name": "Pallavi Joshi",
    "email": "pallavi.joshi5@campusiq.edu",
    "phone_number": "+91 79721 51347",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.01",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 95.3,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 40,
        "total": 40
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 33
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 28,
        "total": 35
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 33
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 30,
        "total": 30
      }
    ]
  },
  {
    "id": "stu_252921207",
    "student_id": "252921207",
    "password": "student123",
    "full_name": "Gaurav Gupta",
    "email": "gaurav.gupta6@campusiq.edu",
    "phone_number": "+91 79721 83579",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.55",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 79.3,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 32,
        "total": 41
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 33
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 36
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 32
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921208",
    "student_id": "252921208",
    "password": "student123",
    "full_name": "Aditi Gupta",
    "email": "aditi.gupta7@campusiq.edu",
    "phone_number": "+91 79721 92240",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.5",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 93.9,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 33
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 38,
        "total": 38
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 31
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 30
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 26,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921209",
    "student_id": "252921209",
    "password": "student123",
    "full_name": "Ishita Shah",
    "email": "ishita.shah8@campusiq.edu",
    "phone_number": "+91 79721 94012",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.67",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 89.3,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 34,
        "total": 37
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 38
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 40,
        "total": 40
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 38,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921210",
    "student_id": "252921210",
    "password": "student123",
    "full_name": "Akash Kulkarni",
    "email": "akash.kulkarni9@campusiq.edu",
    "phone_number": "+91 79721 89818",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.99",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 90.4,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 37,
        "total": 41
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 33,
        "total": 38
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 32,
        "total": 38
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 36,
        "total": 40
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 40,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921211",
    "student_id": "252921211",
    "password": "student123",
    "full_name": "Pooja Patil",
    "email": "pooja.patil10@campusiq.edu",
    "phone_number": "+91 79721 41385",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.28",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.0,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 38
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 39
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 37
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 31
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921212",
    "student_id": "252921212",
    "password": "student123",
    "full_name": "Rohan Shinde",
    "email": "rohan.shinde11@campusiq.edu",
    "phone_number": "+91 79721 37760",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.74",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 80.6,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 24,
        "total": 31
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 32
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 37
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 32
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 31,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921213",
    "student_id": "252921213",
    "password": "student123",
    "full_name": "Aditi Kumar",
    "email": "aditi.kumar12@campusiq.edu",
    "phone_number": "+91 79721 87110",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.81",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.9,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 29,
        "total": 35
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 38
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 24,
        "total": 31
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 33
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 26,
        "total": 35
      }
    ]
  },
  {
    "id": "stu_252921214",
    "student_id": "252921214",
    "password": "student123",
    "full_name": "Nikhil Shinde",
    "email": "nikhil.shinde13@campusiq.edu",
    "phone_number": "+91 79721 38080",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.47",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.8,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 30
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 23,
        "total": 31
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 26,
        "total": 35
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 38
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921215",
    "student_id": "252921215",
    "password": "student123",
    "full_name": "Aditi Patil",
    "email": "aditi.patil14@campusiq.edu",
    "phone_number": "+91 79721 17100",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.06",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 80.8,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 34,
        "total": 42
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 33
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 35
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 30,
        "total": 36
      }
    ]
  },
  {
    "id": "stu_252921216",
    "student_id": "252921216",
    "password": "student123",
    "full_name": "Rakesh Iyer",
    "email": "rakesh.iyer15@campusiq.edu",
    "phone_number": "+91 79721 70637",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.82",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 89.8,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 33
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 38,
        "total": 38
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 32
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921217",
    "student_id": "252921217",
    "password": "student123",
    "full_name": "Varun Pandey",
    "email": "varun.pandey16@campusiq.edu",
    "phone_number": "+91 79721 38016",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.2",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 60.8,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 17,
        "total": 31
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 22,
        "total": 40
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 18,
        "total": 31
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 20,
        "total": 32
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 27,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921218",
    "student_id": "252921218",
    "password": "student123",
    "full_name": "Gaurav Trivedi",
    "email": "gaurav.trivedi17@campusiq.edu",
    "phone_number": "+91 79721 48890",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.74",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 69.6,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 34
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 41
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 40
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 18,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921219",
    "student_id": "252921219",
    "password": "student123",
    "full_name": "Siddharth Sharma",
    "email": "siddharth.sharma18@campusiq.edu",
    "phone_number": "+91 79721 87992",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.29",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.3,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 22,
        "total": 30
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 39
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 29,
        "total": 38
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 22,
        "total": 30
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921220",
    "student_id": "252921220",
    "password": "student123",
    "full_name": "Priya Bhat",
    "email": "priya.bhat19@campusiq.edu",
    "phone_number": "+91 79721 97782",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.86",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 60.8,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 22,
        "total": 33
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 21,
        "total": 39
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 22,
        "total": 39
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 36
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 21,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921221",
    "student_id": "252921221",
    "password": "student123",
    "full_name": "Vishal Chavan",
    "email": "vishal.chavan20@campusiq.edu",
    "phone_number": "+91 79721 76307",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.8",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.1,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 35
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 39
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921222",
    "student_id": "252921222",
    "password": "student123",
    "full_name": "Kavya Patil",
    "email": "kavya.patil21@campusiq.edu",
    "phone_number": "+91 79721 96951",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.44",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 94.4,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 29,
        "total": 32
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 38
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 39,
        "total": 39
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 30
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 35,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921223",
    "student_id": "252921223",
    "password": "student123",
    "full_name": "Sneha Trivedi",
    "email": "sneha.trivedi22@campusiq.edu",
    "phone_number": "+91 79721 93130",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.84",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 90.8,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 33,
        "total": 38
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 34
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 34,
        "total": 39
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 38,
        "total": 41
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921224",
    "student_id": "252921224",
    "password": "student123",
    "full_name": "Kavya Sawant",
    "email": "kavya.sawant23@campusiq.edu",
    "phone_number": "+91 79721 44335",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.53",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 65.9,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 22,
        "total": 31
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 23,
        "total": 36
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 16,
        "total": 30
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 35
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 22,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921225",
    "student_id": "252921225",
    "password": "student123",
    "full_name": "Ishita Singh",
    "email": "ishita.singh24@campusiq.edu",
    "phone_number": "+91 79721 15482",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.85",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 75.7,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 31
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 41
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 28,
        "total": 38
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 27,
        "total": 35
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 36
      }
    ]
  },
  {
    "id": "stu_252921226",
    "student_id": "252921226",
    "password": "student123",
    "full_name": "Kunal Pawar",
    "email": "kunal.pawar25@campusiq.edu",
    "phone_number": "+91 79721 33206",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.16",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 94.8,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 27,
        "total": 31
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 42,
        "total": 42
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 36
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 33
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921227",
    "student_id": "252921227",
    "password": "student123",
    "full_name": "Divya Sambhale",
    "email": "divya.sambhale26@campusiq.edu",
    "phone_number": "+91 79721 36158",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.11",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 85.2,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 40
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 29,
        "total": 34
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 36
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921228",
    "student_id": "252921228",
    "password": "student123",
    "full_name": "Abhishek Pawar",
    "email": "abhishek.pawar27@campusiq.edu",
    "phone_number": "+91 79721 13617",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.21",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 79.1,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 29,
        "total": 36
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 42
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 35
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921229",
    "student_id": "252921229",
    "password": "student123",
    "full_name": "Aditya Trivedi",
    "email": "aditya.trivedi28@campusiq.edu",
    "phone_number": "+91 79721 60488",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.42",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 63.2,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 16,
        "total": 30
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 39
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 24,
        "total": 35
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 42
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 20,
        "total": 36
      }
    ]
  },
  {
    "id": "stu_252921230",
    "student_id": "252921230",
    "password": "student123",
    "full_name": "Swati Verma",
    "email": "swati.verma29@campusiq.edu",
    "phone_number": "+91 79721 96951",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.86",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 95.1,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 42,
        "total": 42
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 40
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 34,
        "total": 35
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 31
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 35
      }
    ]
  },
  {
    "id": "stu_252921231",
    "student_id": "252921231",
    "password": "student123",
    "full_name": "Aditya Singh",
    "email": "aditya.singh30@campusiq.edu",
    "phone_number": "+91 79721 90676",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.5",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 89.8,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 33,
        "total": 36
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 33,
        "total": 38
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 33
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 38,
        "total": 40
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921232",
    "student_id": "252921232",
    "password": "student123",
    "full_name": "Swati Mehta",
    "email": "swati.mehta31@campusiq.edu",
    "phone_number": "+91 79721 32241",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.28",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 94.7,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 30,
        "total": 33
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 39,
        "total": 42
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 37,
        "total": 37
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 37
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 38,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921233",
    "student_id": "252921233",
    "password": "student123",
    "full_name": "Bhavna Deshmukh",
    "email": "bhavna.deshmukh32@campusiq.edu",
    "phone_number": "+91 79721 72277",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.71",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.1,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 24,
        "total": 31
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 40
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 33
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 32
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 23,
        "total": 30
      }
    ]
  },
  {
    "id": "stu_252921234",
    "student_id": "252921234",
    "password": "student123",
    "full_name": "Amit Pandey",
    "email": "amit.pandey33@campusiq.edu",
    "phone_number": "+91 79721 65724",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.86",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.3,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 27,
        "total": 33
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 30,
        "total": 37
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 33
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 40
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 31,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921235",
    "student_id": "252921235",
    "password": "student123",
    "full_name": "Tanvi Joshi",
    "email": "tanvi.joshi34@campusiq.edu",
    "phone_number": "+91 79721 65933",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.62",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 96.7,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 31
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 32
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 37
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 41,
        "total": 42
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 39,
        "total": 39
      }
    ]
  },
  {
    "id": "stu_252921236",
    "student_id": "252921236",
    "password": "student123",
    "full_name": "Nikhil Kale",
    "email": "nikhil.kale35@campusiq.edu",
    "phone_number": "+91 79721 20155",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.38",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 79.5,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 32,
        "total": 42
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 40
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 37
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921237",
    "student_id": "252921237",
    "password": "student123",
    "full_name": "Vishal Mehta",
    "email": "vishal.mehta36@campusiq.edu",
    "phone_number": "+91 79721 63424",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.59",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 59.6,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 18,
        "total": 31
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 18,
        "total": 32
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 21,
        "total": 36
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 41
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 20,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921238",
    "student_id": "252921238",
    "password": "student123",
    "full_name": "Akash Mishra",
    "email": "akash.mishra37@campusiq.edu",
    "phone_number": "+91 79721 64921",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.66",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 61.5,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 19,
        "total": 36
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 29,
        "total": 42
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 20,
        "total": 37
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 21,
        "total": 35
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921239",
    "student_id": "252921239",
    "password": "student123",
    "full_name": "Aditi Singh",
    "email": "aditi.singh38@campusiq.edu",
    "phone_number": "+91 79721 71261",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.5",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.7,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 37
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 29,
        "total": 36
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 31,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921240",
    "student_id": "252921240",
    "password": "student123",
    "full_name": "Neha Nair",
    "email": "neha.nair39@campusiq.edu",
    "phone_number": "+91 79721 52906",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.53",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.7,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 30,
        "total": 40
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 32
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 32
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921241",
    "student_id": "252921241",
    "password": "student123",
    "full_name": "Siddharth Kale",
    "email": "siddharth.kale40@campusiq.edu",
    "phone_number": "+91 79721 39389",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.04",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 89.7,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 40,
        "total": 42
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 37
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 41,
        "total": 41
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 26,
        "total": 30
      }
    ]
  },
  {
    "id": "stu_252921242",
    "student_id": "252921242",
    "password": "student123",
    "full_name": "Sanket Deshmukh",
    "email": "sanket.deshmukh41@campusiq.edu",
    "phone_number": "+91 79721 70952",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.68",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 87.3,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 30
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 32
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 29,
        "total": 32
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 39
      }
    ]
  },
  {
    "id": "stu_252921243",
    "student_id": "252921243",
    "password": "student123",
    "full_name": "Sakshi Gupta",
    "email": "sakshi.gupta42@campusiq.edu",
    "phone_number": "+91 79721 61990",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.51",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 58.9,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 41
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 25,
        "total": 42
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 19,
        "total": 34
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 21,
        "total": 39
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921244",
    "student_id": "252921244",
    "password": "student123",
    "full_name": "Vishal Verma",
    "email": "vishal.verma43@campusiq.edu",
    "phone_number": "+91 79721 96706",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.8",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.9,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 31
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 30,
        "total": 40
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 42
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 35
      }
    ]
  },
  {
    "id": "stu_252921245",
    "student_id": "252921245",
    "password": "student123",
    "full_name": "Mayank Deshmukh",
    "email": "mayank.deshmukh44@campusiq.edu",
    "phone_number": "+91 79721 78386",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.61",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 62.6,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 21,
        "total": 37
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 36
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 29,
        "total": 40
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 41
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 21,
        "total": 36
      }
    ]
  },
  {
    "id": "stu_252921246",
    "student_id": "252921246",
    "password": "student123",
    "full_name": "Sanket Gupta",
    "email": "sanket.gupta45@campusiq.edu",
    "phone_number": "+91 79721 84691",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.08",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 80.0,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 34,
        "total": 41
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 34
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 24,
        "total": 33
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 27,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921247",
    "student_id": "252921247",
    "password": "student123",
    "full_name": "Amit Bhat",
    "email": "amit.bhat46@campusiq.edu",
    "phone_number": "+91 79721 82848",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.55",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 62.4,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 20,
        "total": 32
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 20,
        "total": 33
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 42
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 21,
        "total": 35
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 25,
        "total": 39
      }
    ]
  },
  {
    "id": "stu_252921248",
    "student_id": "252921248",
    "password": "student123",
    "full_name": "Satyam Sawant",
    "email": "satyam.sawant47@campusiq.edu",
    "phone_number": "+91 79721 39045",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.27",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 90.9,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 34,
        "total": 38
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 40,
        "total": 41
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 39,
        "total": 40
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 37
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 27,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921249",
    "student_id": "252921249",
    "password": "student123",
    "full_name": "Gaurav Agarwal",
    "email": "gaurav.agarwal48@campusiq.edu",
    "phone_number": "+91 79721 25814",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.71",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 93.8,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 36,
        "total": 38
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 34,
        "total": 36
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 35
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 34
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 30,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921250",
    "student_id": "252921250",
    "password": "student123",
    "full_name": "Preeti Verma",
    "email": "preeti.verma49@campusiq.edu",
    "phone_number": "+91 79721 48829",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.98",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 62.2,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 24,
        "total": 41
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 19,
        "total": 33
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 29,
        "total": 41
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 22,
        "total": 34
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 18,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921251",
    "student_id": "252921251",
    "password": "student123",
    "full_name": "Tanvi Pawar",
    "email": "tanvi.pawar50@campusiq.edu",
    "phone_number": "+91 79721 85243",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.5",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.3,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 30
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 41
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 23,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921252",
    "student_id": "252921252",
    "password": "student123",
    "full_name": "Riya Bhosale",
    "email": "riya.bhosale51@campusiq.edu",
    "phone_number": "+91 79721 29887",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.61",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 64.5,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 17,
        "total": 31
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 26,
        "total": 36
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 21,
        "total": 31
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 22,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921253",
    "student_id": "252921253",
    "password": "student123",
    "full_name": "Rahul Shah",
    "email": "rahul.shah52@campusiq.edu",
    "phone_number": "+91 79721 87139",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.74",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 95.3,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 37,
        "total": 38
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 34,
        "total": 39
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 42,
        "total": 42
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 36,
        "total": 36
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921254",
    "student_id": "252921254",
    "password": "student123",
    "full_name": "Pranav Mehta",
    "email": "pranav.mehta53@campusiq.edu",
    "phone_number": "+91 79721 19838",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.65",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 59.8,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 18,
        "total": 31
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 25,
        "total": 40
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 19,
        "total": 34
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 18,
        "total": 32
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 21,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921255",
    "student_id": "252921255",
    "password": "student123",
    "full_name": "Ishita Sambhale",
    "email": "ishita.sambhale54@campusiq.edu",
    "phone_number": "+91 79721 65723",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.79",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.2,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 30
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 34
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 41
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 31
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 26,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921256",
    "student_id": "252921256",
    "password": "student123",
    "full_name": "Aditya Mishra",
    "email": "aditya.mishra55@campusiq.edu",
    "phone_number": "+91 79721 71433",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.96",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 86.1,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 26,
        "total": 32
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 38,
        "total": 42
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 35,
        "total": 39
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 31,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921257",
    "student_id": "252921257",
    "password": "student123",
    "full_name": "Sakshi Mehta",
    "email": "sakshi.mehta56@campusiq.edu",
    "phone_number": "+91 79721 98117",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.15",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.3,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 31
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 29,
        "total": 36
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 39
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 22,
        "total": 30
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921258",
    "student_id": "252921258",
    "password": "student123",
    "full_name": "Harsh Reddy",
    "email": "harsh.reddy57@campusiq.edu",
    "phone_number": "+91 79721 53687",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.05",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 81.6,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 26,
        "total": 34
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 39
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 35
      }
    ]
  },
  {
    "id": "stu_252921259",
    "student_id": "252921259",
    "password": "student123",
    "full_name": "Simran Bhat",
    "email": "simran.bhat58@campusiq.edu",
    "phone_number": "+91 79721 25194",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.57",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 81.9,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 31
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 27,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921260",
    "student_id": "252921260",
    "password": "student123",
    "full_name": "Suraj Jadhav",
    "email": "suraj.jadhav59@campusiq.edu",
    "phone_number": "+91 79721 36680",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.69",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.4,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 27,
        "total": 36
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 33
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 32,
        "total": 39
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 31,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921261",
    "student_id": "252921261",
    "password": "student123",
    "full_name": "Harsh Mishra",
    "email": "harsh.mishra60@campusiq.edu",
    "phone_number": "+91 79721 22217",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.94",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.6,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 31
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 40
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 41
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 31,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921262",
    "student_id": "252921262",
    "password": "student123",
    "full_name": "Tanvi Rao",
    "email": "tanvi.rao61@campusiq.edu",
    "phone_number": "+91 79721 69871",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.67",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.8,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 32
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 41
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 38
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 36
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921263",
    "student_id": "252921263",
    "password": "student123",
    "full_name": "Nikhil Patil",
    "email": "nikhil.patil62@campusiq.edu",
    "phone_number": "+91 79721 86931",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.58",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 79.1,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 24,
        "total": 32
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 28,
        "total": 35
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 30
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921264",
    "student_id": "252921264",
    "password": "student123",
    "full_name": "Deepak Bhat",
    "email": "deepak.bhat63@campusiq.edu",
    "phone_number": "+91 79721 15720",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.97",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 80.2,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 29,
        "total": 35
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 29,
        "total": 37
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 33
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 32,
        "total": 39
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 27,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921265",
    "student_id": "252921265",
    "password": "student123",
    "full_name": "Simran Singh",
    "email": "simran.singh64@campusiq.edu",
    "phone_number": "+91 79721 23069",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.76",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.8,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 31,
        "total": 40
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 37
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 26,
        "total": 32
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 39
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 26,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921266",
    "student_id": "252921266",
    "password": "student123",
    "full_name": "Karan Mahajan",
    "email": "karan.mahajan65@campusiq.edu",
    "phone_number": "+91 79721 53065",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.91",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 88.8,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 34,
        "total": 40
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 31
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 38,
        "total": 42
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 34,
        "total": 35
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921267",
    "student_id": "252921267",
    "password": "student123",
    "full_name": "Rakesh Pandey",
    "email": "rakesh.pandey66@campusiq.edu",
    "phone_number": "+91 79721 66881",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.69",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.2,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 34,
        "total": 42
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 38
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 29,
        "total": 39
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 26,
        "total": 33
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921268",
    "student_id": "252921268",
    "password": "student123",
    "full_name": "Sneha Kumar",
    "email": "sneha.kumar67@campusiq.edu",
    "phone_number": "+91 79721 79621",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.02",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 87.3,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 24,
        "total": 30
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 35
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 32,
        "total": 34
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 34,
        "total": 35
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 27,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921269",
    "student_id": "252921269",
    "password": "student123",
    "full_name": "Divya Reddy",
    "email": "divya.reddy68@campusiq.edu",
    "phone_number": "+91 79721 97404",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.05",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.8,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 36
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 37
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 24,
        "total": 32
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 37
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921270",
    "student_id": "252921270",
    "password": "student123",
    "full_name": "Satyam Trivedi",
    "email": "satyam.trivedi69@campusiq.edu",
    "phone_number": "+91 79721 36111",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.75",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 92.3,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 37
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 39
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 38,
        "total": 40
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 37,
        "total": 41
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921271",
    "student_id": "252921271",
    "password": "student123",
    "full_name": "Meera Pandey",
    "email": "meera.pandey70@campusiq.edu",
    "phone_number": "+91 79721 89482",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.26",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.6,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 31,
        "total": 39
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 41
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 39
      }
    ]
  },
  {
    "id": "stu_252921272",
    "student_id": "252921272",
    "password": "student123",
    "full_name": "Manoj Bhosale",
    "email": "manoj.bhosale71@campusiq.edu",
    "phone_number": "+91 79721 50492",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.51",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 84.9,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 40
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 39
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 34,
        "total": 40
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921273",
    "student_id": "252921273",
    "password": "student123",
    "full_name": "Nidhi Sharma",
    "email": "nidhi.sharma72@campusiq.edu",
    "phone_number": "+91 79721 79579",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.94",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 93.8,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 32,
        "total": 34
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 39,
        "total": 41
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 32
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 32,
        "total": 32
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 36,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921274",
    "student_id": "252921274",
    "password": "student123",
    "full_name": "Anjali Mahajan",
    "email": "anjali.mahajan73@campusiq.edu",
    "phone_number": "+91 79721 39571",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.32",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 63.0,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 24,
        "total": 37
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 41
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 24,
        "total": 42
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 21,
        "total": 37
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 23,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921275",
    "student_id": "252921275",
    "password": "student123",
    "full_name": "Rakesh Singh",
    "email": "rakesh.singh74@campusiq.edu",
    "phone_number": "+91 79721 93695",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.69",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.8,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 24,
        "total": 30
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 38
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 29,
        "total": 37
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 32,
        "total": 40
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 39
      }
    ]
  },
  {
    "id": "stu_252921276",
    "student_id": "252921276",
    "password": "student123",
    "full_name": "Mayank Kulkarni",
    "email": "mayank.kulkarni75@campusiq.edu",
    "phone_number": "+91 79721 95097",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.54",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 64.1,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 38
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 39
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 23,
        "total": 40
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 40
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 26,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921277",
    "student_id": "252921277",
    "password": "student123",
    "full_name": "Divya Kulkarni",
    "email": "divya.kulkarni76@campusiq.edu",
    "phone_number": "+91 79721 86983",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.67",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 90.4,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 31,
        "total": 37
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 38
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 36,
        "total": 36
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 35
      }
    ]
  },
  {
    "id": "stu_252921278",
    "student_id": "252921278",
    "password": "student123",
    "full_name": "Manoj Singh",
    "email": "manoj.singh77@campusiq.edu",
    "phone_number": "+91 79721 57537",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.68",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 63.0,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 27,
        "total": 39
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 18,
        "total": 34
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 41
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 21,
        "total": 33
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 23,
        "total": 37
      }
    ]
  },
  {
    "id": "stu_252921279",
    "student_id": "252921279",
    "password": "student123",
    "full_name": "Sneha Bhat",
    "email": "sneha.bhat78@campusiq.edu",
    "phone_number": "+91 79721 16629",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.52",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.9,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 34
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 31
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 30,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921280",
    "student_id": "252921280",
    "password": "student123",
    "full_name": "Akash Shinde",
    "email": "akash.shinde79@campusiq.edu",
    "phone_number": "+91 79721 46342",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.15",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 59.3,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 38
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 39
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 20,
        "total": 33
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 42
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 23,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921281",
    "student_id": "252921281",
    "password": "student123",
    "full_name": "Rahul Patil",
    "email": "rahul.patil80@campusiq.edu",
    "phone_number": "+91 79721 44782",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.16",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 87.1,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 30
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 37,
        "total": 42
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 36,
        "total": 39
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 25,
        "total": 30
      }
    ]
  },
  {
    "id": "stu_252921282",
    "student_id": "252921282",
    "password": "student123",
    "full_name": "Rohan Patil",
    "email": "rohan.patil81@campusiq.edu",
    "phone_number": "+91 79721 49535",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.84",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 89.6,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 37
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 38
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 37
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 39
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 41,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921283",
    "student_id": "252921283",
    "password": "student123",
    "full_name": "Abhishek Iyer",
    "email": "abhishek.iyer82@campusiq.edu",
    "phone_number": "+91 79721 26540",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.85",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 60.8,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 20,
        "total": 36
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 37
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 17,
        "total": 31
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 23,
        "total": 35
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 17,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921284",
    "student_id": "252921284",
    "password": "student123",
    "full_name": "Harsh Nair",
    "email": "harsh.nair83@campusiq.edu",
    "phone_number": "+91 79721 95814",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.87",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 95.6,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 39,
        "total": 39
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 34,
        "total": 34
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 37,
        "total": 38
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 31
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921285",
    "student_id": "252921285",
    "password": "student123",
    "full_name": "Sanket Trivedi",
    "email": "sanket.trivedi84@campusiq.edu",
    "phone_number": "+91 79721 50963",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.39",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 93.3,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 30,
        "total": 33
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 35
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 36
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 34,
        "total": 41
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 35
      }
    ]
  },
  {
    "id": "stu_252921286",
    "student_id": "252921286",
    "password": "student123",
    "full_name": "Bhavna Gupta",
    "email": "bhavna.gupta85@campusiq.edu",
    "phone_number": "+91 79721 86869",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.79",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.5,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 23,
        "total": 31
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 31
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 32,
        "total": 42
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921287",
    "student_id": "252921287",
    "password": "student123",
    "full_name": "Nikhil Mishra",
    "email": "nikhil.mishra86@campusiq.edu",
    "phone_number": "+91 79721 37884",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.87",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 89.9,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 38,
        "total": 40
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 33,
        "total": 41
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 34
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 35
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 39,
        "total": 39
      }
    ]
  },
  {
    "id": "stu_252921288",
    "student_id": "252921288",
    "password": "student123",
    "full_name": "Rahul Bhat",
    "email": "rahul.bhat87@campusiq.edu",
    "phone_number": "+91 79721 89822",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.33",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 91.8,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 36,
        "total": 38
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 31
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 34
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 40,
        "total": 42
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 31,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921289",
    "student_id": "252921289",
    "password": "student123",
    "full_name": "Bhavna Rao",
    "email": "bhavna.rao88@campusiq.edu",
    "phone_number": "+91 79721 92991",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.06",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 77.8,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 27,
        "total": 34
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 35
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 24,
        "total": 32
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 32,
        "total": 39
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921290",
    "student_id": "252921290",
    "password": "student123",
    "full_name": "Aarav Deshmukh",
    "email": "aarav.deshmukh89@campusiq.edu",
    "phone_number": "+91 79721 30632",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.73",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.5,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 32
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 34
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 29,
        "total": 39
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 23,
        "total": 30
      }
    ]
  },
  {
    "id": "stu_252921291",
    "student_id": "252921291",
    "password": "student123",
    "full_name": "Deepika Nair",
    "email": "deepika.nair90@campusiq.edu",
    "phone_number": "+91 79721 66349",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.38",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 81.2,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 31,
        "total": 37
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 30,
        "total": 37
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 26,
        "total": 34
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 25,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921292",
    "student_id": "252921292",
    "password": "student123",
    "full_name": "Aditya Mehta",
    "email": "aditya.mehta91@campusiq.edu",
    "phone_number": "+91 79721 43491",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.24",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 85.4,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 30,
        "total": 33
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 39
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 34
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 36,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921293",
    "student_id": "252921293",
    "password": "student123",
    "full_name": "Riya Chavan",
    "email": "riya.chavan92@campusiq.edu",
    "phone_number": "+91 79721 67176",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.14",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 88.9,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 29,
        "total": 32
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 34,
        "total": 38
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 36,
        "total": 38
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 31
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921294",
    "student_id": "252921294",
    "password": "student123",
    "full_name": "Aarav Kale",
    "email": "aarav.kale93@campusiq.edu",
    "phone_number": "+91 79721 70305",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.41",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.2,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 33,
        "total": 41
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 36
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 27,
        "total": 35
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 35,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921295",
    "student_id": "252921295",
    "password": "student123",
    "full_name": "Sakshi Mahajan",
    "email": "sakshi.mahajan94@campusiq.edu",
    "phone_number": "+91 79721 32037",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.93",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 90.8,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 36
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 38
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 36
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 38,
        "total": 41
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921296",
    "student_id": "252921296",
    "password": "student123",
    "full_name": "Priya Sawant",
    "email": "priya.sawant95@campusiq.edu",
    "phone_number": "+91 79721 88957",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.18",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 58.0,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 21,
        "total": 35
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 41
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 18,
        "total": 33
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 19,
        "total": 32
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 19,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921297",
    "student_id": "252921297",
    "password": "student123",
    "full_name": "Rahul Kumar",
    "email": "rahul.kumar96@campusiq.edu",
    "phone_number": "+91 79721 29786",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.68",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 82.1,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 31,
        "total": 37
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 31,
        "total": 37
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 32,
        "total": 40
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921298",
    "student_id": "252921298",
    "password": "student123",
    "full_name": "Nidhi Deshmukh",
    "email": "nidhi.deshmukh97@campusiq.edu",
    "phone_number": "+91 79721 47627",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.6",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.6,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 29,
        "total": 39
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 35
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 27,
        "total": 37
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 30
      }
    ]
  },
  {
    "id": "stu_252921299",
    "student_id": "252921299",
    "password": "student123",
    "full_name": "Priya Iyer",
    "email": "priya.iyer98@campusiq.edu",
    "phone_number": "+91 79721 18109",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.47",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 91.1,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 39,
        "total": 39
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 34,
        "total": 42
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 37
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 35,
        "total": 35
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921300",
    "student_id": "252921300",
    "password": "student123",
    "full_name": "Nidhi Kulkarni",
    "email": "nidhi.kulkarni99@campusiq.edu",
    "phone_number": "+91 79721 63578",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.17",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 94.9,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 32,
        "total": 33
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 37,
        "total": 37
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 38
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 35
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921301",
    "student_id": "252921301",
    "password": "student123",
    "full_name": "Suraj Chavan",
    "email": "suraj.chavan100@campusiq.edu",
    "phone_number": "+91 79721 20682",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.13",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 81.1,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 25,
        "total": 31
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 31
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 34
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 34,
        "total": 41
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 25,
        "total": 32
      }
    ]
  },
  {
    "id": "stu_252921302",
    "student_id": "252921302",
    "password": "student123",
    "full_name": "Deepak Bhat",
    "email": "deepak.bhat101@campusiq.edu",
    "phone_number": "+91 79721 26750",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.5",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 79.7,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 32
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 41
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 32,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921303",
    "student_id": "252921303",
    "password": "student123",
    "full_name": "Bhavna Agarwal",
    "email": "bhavna.agarwal102@campusiq.edu",
    "phone_number": "+91 79721 28030",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.65",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 88.2,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 35
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 35
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 32
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 35,
        "total": 35
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921304",
    "student_id": "252921304",
    "password": "student123",
    "full_name": "Rahul Deshmukh",
    "email": "rahul.deshmukh103@campusiq.edu",
    "phone_number": "+91 79721 31266",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.18",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 81.2,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 34,
        "total": 41
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 30
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 26,
        "total": 32
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 28,
        "total": 36
      }
    ]
  },
  {
    "id": "stu_252921305",
    "student_id": "252921305",
    "password": "student123",
    "full_name": "Arjun Rao",
    "email": "arjun.rao104@campusiq.edu",
    "phone_number": "+91 79721 71474",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.9",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 92.2,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 31,
        "total": 35
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 34,
        "total": 37
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 41,
        "total": 42
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 33
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921306",
    "student_id": "252921306",
    "password": "student123",
    "full_name": "Pooja Pawar",
    "email": "pooja.pawar105@campusiq.edu",
    "phone_number": "+91 79721 94040",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.02",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 92.0,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 36
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 32,
        "total": 32
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 33,
        "total": 33
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 39
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 27,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921307",
    "student_id": "252921307",
    "password": "student123",
    "full_name": "Shreya Pandey",
    "email": "shreya.pandey106@campusiq.edu",
    "phone_number": "+91 79721 67340",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.63",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 76.3,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 38
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 25,
        "total": 34
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 32,
        "total": 42
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 29,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921308",
    "student_id": "252921308",
    "password": "student123",
    "full_name": "Vikram Mahajan",
    "email": "vikram.mahajan107@campusiq.edu",
    "phone_number": "+91 79721 51770",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.46",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 59.8,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 19,
        "total": 36
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 36
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 21,
        "total": 33
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 19,
        "total": 31
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 18,
        "total": 33
      }
    ]
  },
  {
    "id": "stu_252921309",
    "student_id": "252921309",
    "password": "student123",
    "full_name": "Sneha Rao",
    "email": "sneha.rao108@campusiq.edu",
    "phone_number": "+91 79721 29597",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.92",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 87.3,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 32,
        "total": 37
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 41,
        "total": 42
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 37
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 31
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 30,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921310",
    "student_id": "252921310",
    "password": "student123",
    "full_name": "Nikhil Singh",
    "email": "nikhil.singh109@campusiq.edu",
    "phone_number": "+91 79721 75513",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.89",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.6,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 26,
        "total": 33
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 23,
        "total": 31
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 33
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 40
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 23,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921311",
    "student_id": "252921311",
    "password": "student123",
    "full_name": "Aishwarya Mishra",
    "email": "aishwarya.mishra110@campusiq.edu",
    "phone_number": "+91 79721 78614",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.41",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 79.9,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 30
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 27,
        "total": 33
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 26,
        "total": 32
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 30,
        "total": 40
      }
    ]
  },
  {
    "id": "stu_252921312",
    "student_id": "252921312",
    "password": "student123",
    "full_name": "Mayank Deshmukh",
    "email": "mayank.deshmukh111@campusiq.edu",
    "phone_number": "+91 79721 56805",
    "course": "B.Tech",
    "branch": "Mechanical Engineering",
    "department": "Mechanical Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.17",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 62.6,
    "subjects": [
      {
        "id": "MECH301",
        "code": "MECH301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 20,
        "total": 38
      },
      {
        "id": "MECH302",
        "code": "MECH302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 26,
        "total": 36
      },
      {
        "id": "MECH303",
        "code": "MECH303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 21,
        "total": 30
      },
      {
        "id": "MECH304",
        "code": "MECH304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 24,
        "total": 36
      },
      {
        "id": "MECH305",
        "code": "MECH305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 18,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921313",
    "student_id": "252921313",
    "password": "student123",
    "full_name": "Priya Pawar",
    "email": "priya.pawar112@campusiq.edu",
    "phone_number": "+91 79721 72722",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.07",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 78.9,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 27,
        "total": 35
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 24,
        "total": 30
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 30,
        "total": 38
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 40
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 34,
        "total": 42
      }
    ]
  },
  {
    "id": "stu_252921314",
    "student_id": "252921314",
    "password": "student123",
    "full_name": "Pallavi Joshi",
    "email": "pallavi.joshi113@campusiq.edu",
    "phone_number": "+91 79721 81176",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.88",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 61.5,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 18,
        "total": 30
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 18,
        "total": 33
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 26,
        "total": 42
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 18,
        "total": 30
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 24,
        "total": 34
      }
    ]
  },
  {
    "id": "stu_252921315",
    "student_id": "252921315",
    "password": "student123",
    "full_name": "Shreya Gupta",
    "email": "shreya.gupta114@campusiq.edu",
    "phone_number": "+91 79721 67637",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.42",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 66.5,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 22,
        "total": 30
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 27,
        "total": 40
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 19,
        "total": 34
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 42
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 25,
        "total": 36
      }
    ]
  },
  {
    "id": "stu_252921316",
    "student_id": "252921316",
    "password": "student123",
    "full_name": "Meera Chavan",
    "email": "meera.chavan115@campusiq.edu",
    "phone_number": "+91 79721 81496",
    "course": "B.Tech",
    "branch": "AI and Data Science",
    "department": "AI and Data Science",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.8",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 90.9,
    "subjects": [
      {
        "id": "AIDS301",
        "code": "AIDS301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 42,
        "total": 42
      },
      {
        "id": "AIDS302",
        "code": "AIDS302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 28,
        "total": 34
      },
      {
        "id": "AIDS303",
        "code": "AIDS303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 39,
        "total": 41
      },
      {
        "id": "AIDS304",
        "code": "AIDS304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 28,
        "total": 31
      },
      {
        "id": "AIDS305",
        "code": "AIDS305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 33,
        "total": 39
      }
    ]
  },
  {
    "id": "stu_252921317",
    "student_id": "252921317",
    "password": "student123",
    "full_name": "Riya Chavan",
    "email": "riya.chavan116@campusiq.edu",
    "phone_number": "+91 79721 90589",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "7.56",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 92.4,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 36,
        "total": 37
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 31,
        "total": 32
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 37
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 30,
        "total": 37
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 38,
        "total": 41
      }
    ]
  },
  {
    "id": "stu_252921318",
    "student_id": "252921318",
    "password": "student123",
    "full_name": "Pranav Gupta",
    "email": "pranav.gupta117@campusiq.edu",
    "phone_number": "+91 79721 94562",
    "course": "B.Tech",
    "branch": "Computer Science and Engineering",
    "department": "Computer Science and Engineering",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "8.73",
    "academic_standing": "Distinction Standing",
    "avatar_url": "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 87.5,
    "subjects": [
      {
        "id": "CSE301",
        "code": "CSE301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 33,
        "total": 38
      },
      {
        "id": "CSE302",
        "code": "CSE302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "CSE303",
        "code": "CSE303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 38,
        "total": 39
      },
      {
        "id": "CSE304",
        "code": "CSE304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 25,
        "total": 30
      },
      {
        "id": "CSE305",
        "code": "CSE305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 26,
        "total": 31
      }
    ]
  },
  {
    "id": "stu_252921319",
    "student_id": "252921319",
    "password": "student123",
    "full_name": "Mayank Pawar",
    "email": "mayank.pawar118@campusiq.edu",
    "phone_number": "+91 79721 62171",
    "course": "B.Tech",
    "branch": "Electronics and Telecommunication",
    "department": "Electronics and Telecommunication",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "6.56",
    "academic_standing": "First Class",
    "avatar_url": "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 91.1,
    "subjects": [
      {
        "id": "ENTC301",
        "code": "ENTC301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 35,
        "total": 37
      },
      {
        "id": "ENTC302",
        "code": "ENTC302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 35,
        "total": 35
      },
      {
        "id": "ENTC303",
        "code": "ENTC303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 35,
        "total": 42
      },
      {
        "id": "ENTC304",
        "code": "ENTC304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 33,
        "total": 39
      },
      {
        "id": "ENTC305",
        "code": "ENTC305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 36,
        "total": 38
      }
    ]
  },
  {
    "id": "stu_252921320",
    "student_id": "252921320",
    "password": "student123",
    "full_name": "Simran Iyer",
    "email": "simran.iyer119@campusiq.edu",
    "phone_number": "+91 79721 38124",
    "course": "B.Tech",
    "branch": "Information Technology",
    "department": "Information Technology",
    "year_semester": "Year 3, Semester 5",
    "cgpa": "9.72",
    "academic_standing": "Dean's Honor List",
    "avatar_url": "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80",
    "overall_attendance": 92.3,
    "subjects": [
      {
        "id": "IT301",
        "code": "IT301",
        "name": "Core Foundation & Algorithms",
        "credits": 4,
        "instructor": "Dr. S. R. Deshmukh",
        "room": "Hall A-204",
        "cabin": "Faculty Block A, Cabin 302",
        "office_hours": "Mon, Wed 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Asymptotic Analysis & Recurrences",
            "weightage": "15%",
            "topics": "Master Theorem, Big-O, Theta, Omega proofs, Recursion Trees"
          },
          {
            "unit": "Unit 2: Advanced Trees & Heaps",
            "weightage": "20%",
            "topics": "AVL Trees, Red-Black Trees, Binomial Heaps, Fibonacci Heaps"
          },
          {
            "unit": "Unit 3: Dynamic Programming (High Exam Priority)",
            "weightage": "35%",
            "topics": "0/1 Knapsack, Matrix Chain Multiplication, Longest Common Subsequence (LCS), Bellman-Ford DP"
          },
          {
            "unit": "Unit 4: Graph Algorithms & Flow Networks",
            "weightage": "20%",
            "topics": "Dijkstra, Kruskal, Prim, Ford-Fulkerson Maximum Flow"
          },
          {
            "unit": "Unit 5: NP-Completeness",
            "weightage": "10%",
            "topics": "P vs NP, Circuit SAT, 3-CNF SAT reduction"
          }
        ],
        "attended": 29,
        "total": 32
      },
      {
        "id": "IT302",
        "code": "IT302",
        "name": "Cloud Architectures & Web Tech",
        "credits": 3,
        "instructor": "Prof. Ananya Mehta",
        "room": "Lab C-102",
        "cabin": "Innovation Wing, Cabin 104",
        "office_hours": "Tue, Thu 02:00 PM \u2013 03:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Modern Web Protocols & HTTP/3",
            "weightage": "15%",
            "topics": "REST, WebSockets, TLS 1.3 Handshake, Server-Sent Events"
          },
          {
            "unit": "Unit 2: Cloud Database Systems (Supabase & PostgreSQL)",
            "weightage": "30%",
            "topics": "Row Level Security (RLS), PostgREST APIs, JWT Tokens, Connection Pooling"
          },
          {
            "unit": "Unit 3: Microservices & Docker Containerization",
            "weightage": "25%",
            "topics": "Dockerfile, Multi-stage builds, Kubernetes Pods, Ingress Controllers"
          },
          {
            "unit": "Unit 4: Serverless Computing & Edge CDN",
            "weightage": "20%",
            "topics": "AWS Lambda, Vercel Edge Workers, CDN Caching strategies"
          },
          {
            "unit": "Unit 5: Web Security & OWASP Top 10",
            "weightage": "10%",
            "topics": "XSS, CSRF tokens, SQL Injection mitigation, CORS policies"
          }
        ],
        "attended": 37,
        "total": 38
      },
      {
        "id": "IT303",
        "code": "IT303",
        "name": "Database Systems & SQL Engines",
        "credits": 4,
        "instructor": "Dr. K. V. Patil",
        "room": "Room B-110",
        "cabin": "Central Research Block, Cabin 210",
        "office_hours": "Wed, Fri 11:00 AM \u2013 12:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Relational Model & Relational Algebra",
            "weightage": "15%",
            "topics": "Tuple Relational Calculus, Projections, Joins, Selection operators"
          },
          {
            "unit": "Unit 2: Advanced SQL & Indexing Strategies",
            "weightage": "25%",
            "topics": "B+ Tree Index structures, Hashing, Query Optimization Cost Estimation"
          },
          {
            "unit": "Unit 3: Normalization & Functional Dependencies",
            "weightage": "30%",
            "topics": "1NF to BCNF decompositions, Lossless Join proof, Dependency Preservation"
          },
          {
            "unit": "Unit 4: Transaction Processing & ACID Properties",
            "weightage": "20%",
            "topics": "2-Phase Locking (2PL), Strict 2PL, Timestamp Ordering, Deadlock prevention"
          },
          {
            "unit": "Unit 5: Crash Recovery & Write-Ahead Logging",
            "weightage": "10%",
            "topics": "ARIES Recovery Algorithm, Checkpointing, Undo/Redo protocols"
          }
        ],
        "attended": 32,
        "total": 38
      },
      {
        "id": "IT304",
        "code": "IT304",
        "name": "Applied Machine Learning Studio",
        "credits": 3,
        "instructor": "Dr. R. H. Iyer",
        "room": "Innovation Hub",
        "cabin": "AI Research Lab, Room 401",
        "office_hours": "Mon, Thu 04:00 PM \u2013 05:00 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Supervised Learning Foundations",
            "weightage": "20%",
            "topics": "Gradient Descent derivations, Regularization (L1 Lasso / L2 Ridge), Logistic Regression"
          },
          {
            "unit": "Unit 2: Deep Neural Networks & Backpropagation",
            "weightage": "35%",
            "topics": "Computational Graphs, Activation functions (GELU, ReLU), Backpropagation chain rule derivations"
          },
          {
            "unit": "Unit 3: Transformer Architectures & Attention",
            "weightage": "25%",
            "topics": "Scaled Dot-Product Attention, Multi-Head Attention, Positional Encodings"
          },
          {
            "unit": "Unit 4: Model Evaluation & Cross-Validation",
            "weightage": "10%",
            "topics": "ROC-AUC, Precision-Recall curves, F1 Score, Confusion Matrix"
          },
          {
            "unit": "Unit 5: Deployment of ML Pipelines",
            "weightage": "10%",
            "topics": "ONNX runtime, FastAPI inference, Quantization"
          }
        ],
        "attended": 31,
        "total": 34
      },
      {
        "id": "IT305",
        "code": "IT305",
        "name": "Computer Networks & Cyber Systems",
        "credits": 3,
        "instructor": "Prof. Vikram Joshi",
        "room": "Hall A-108",
        "cabin": "Networks Lab, Cabin 109",
        "office_hours": "Tue, Fri 03:00 PM \u2013 04:30 PM",
        "syllabus_units": [
          {
            "unit": "Unit 1: Physical & Data Link Layer",
            "weightage": "15%",
            "topics": "Framing, CRC Error Detection, Sliding Window Protocols, CSMA/CD"
          },
          {
            "unit": "Unit 2: Network Layer & IPv4/IPv6 Subnetting",
            "weightage": "30%",
            "topics": "CIDR calculation, Subnet Masking, OSPF Dijkstra routing, BGP inter-domain"
          },
          {
            "unit": "Unit 3: Transport Layer & TCP Congestion Control",
            "weightage": "30%",
            "topics": "TCP 3-Way Handshake, Slow Start, Congestion Avoidance, Fast Retransmit, UDP checksum"
          },
          {
            "unit": "Unit 4: Application Layer Protocols",
            "weightage": "15%",
            "topics": "DNS Hierarchy & Recursive lookups, HTTP/2 multiplexing, SMTP, DHCP flow"
          },
          {
            "unit": "Unit 5: Cryptography & Network Defense",
            "weightage": "10%",
            "topics": "RSA public-key cryptography, Diffie-Hellman key exchange, Firewalls & NAT"
          }
        ],
        "attended": 40,
        "total": 41
      }
    ]
  }
];

if (typeof window !== 'undefined') { window.CAMPUSIQ_STUDENTS = CAMPUSIQ_STUDENTS; }
