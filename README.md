backend/
├── src/
│   ├── auth/
│   │   ├── controller.js
│   │   ├── model.js
│   │   └── route.js
│
│   ├── users/
│   │   ├── controller.js
│   │   ├── model.js
│   │   └── route.js
│
│   ├── elections/
│   │   ├── controller.js
│   │   ├── model.js
│   │   └── route.js
│
│   ├── candidates/
│   │   ├── controller.js
│   │   ├── model.js
│   │   └── route.js
│
│   ├── votes/
│   │   ├── controller.js
│   │   ├── model.js
│   │   └── route.js
│
│   ├── auditLogs/
│   │   ├── controller.js
│   │   ├── model.js
│   │   └── route.js
│
│   ├── otps/
│   │   ├── controller.js
│   │   ├── model.js
│   │   └── route.js
│
│   ├── middlewares/
│   │   ├── authMiddleware.js
│   │   ├── roleMiddleware.js
│   │   ├── errorHandler.js
│   │   └── uploadMiddleware.js
│
│   ├── utils/
│   │   ├── otpGenerator.js
│   │   ├── emailService.js
│   │   └── fileHelper.js
│
│   ├── validators/
│   │   ├── authValidator.js
│   │   ├── userValidator.js
│   │   ├── electionValidator.js
│   │   ├── candidateValidator.js
│   │   └── voteValidator.js
│
│   ├── config/
│   │   └── db.js
│
│   └── server.js
│
├── uploads/
│   ├── users/
│   ├── elections/
│   └── candidates/
│
├── .env
├── .gitignore
├── README.md
├── package.json
└── pnpm-lock.yaml
