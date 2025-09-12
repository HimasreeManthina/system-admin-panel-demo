# System Admin Panel Demo (Surya Allied Services Experience Showcase)

## 📌 Overview
This repository is a **demo project inspired by my short project duration at Surya Allied Services (2021)**.  
As a Junior Java Developer, I worked on building an **admin panel, REST APIs, and deployment experiments**.  

Since client code cannot be shared, this repo is designed to reflect my **contributions, learning, and responsibilities** during that period.  

---

## 🛠️ Responsibilities (Reflected in this Demo)
- Built a **React.js + TypeScript admin panel** for system monitoring.  
- Developed **basic REST APIs** using Node.js backend.  
- Experimented with **AWS CloudFront deployment** for faster content delivery.  
- Gained exposure to **Java/JSP, Struts, Hibernate, and Kafka** through training modules.  
- Documented project workflows using **UML diagrams**.  
- Wrote **unit tests with JUnit** for backend validation.  

---

## 🔧 Tech Stack Used in Demo
- **Frontend:** React.js, TypeScript, Bootstrap  
- **Backend:** Node.js (Express)  
- **Database:** MySQL (mocked)  
- **Cloud:** AWS CloudFront (conceptual demo)  
- **Other Exposure:** Java (JSP, Struts, Hibernate), Kafka, JUnit  

---

## 🏗️ Demo Architecture

```mermaid
graph TD
  U[Admin User] --> F[React Admin Panel]
  F --> B[Node.js REST API]
  B --> D[(MySQL Database)]
  F --> C[Deployed via AWS CloudFront]
