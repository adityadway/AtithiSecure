# 📁 Project Structure - BLE Emergency SOS App

This document outlines the complete project structure and file organization for the BLE Emergency SOS App.

---

## 🏗️ High-Level Architecture

```
BLE/
├── 📱 mobile-app/              # React Native application
├── 📡 ble-core/                # BLE communication logic
├── 🗄️ data-layer/              # Data management and storage
├── 🗺️ offline-maps/            # Map functionality and caching
├── 🔒 security/                # Encryption and authentication
├── 🧪 testing/                 # Test files and utilities
├── 📚 docs/                    # Project documentation
└── 🔧 scripts/                 # Build and deployment scripts
```

---

## 📱 Mobile App Structure

```
mobile-app/
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── common/             # Generic components
│   │   │   ├── Button.js
│   │   │   ├── Alert.js
│   │   │   ├── LoadingSpinner.js
│   │   │   └── StatusIndicator.js
│   │   ├── sos/                # SOS-related components
│   │   │   ├── SOSButton.js
│   │   │   ├── SOSAlert.js
│   │   │   ├── SOSHistory.js
│   │   │   └── EmergencyTemplates.js
│   │   ├── chat/               # Chat components
│   │   │   ├── ChatScreen.js
│   │   │   ├── MessageBubble.js
│   │   │   ├── MessageInput.js
│   │   │   └── ChatHistory.js
│   │   ├── network/            # Network status components
│   │   │   ├── DeviceList.js
│   │   │   ├── NetworkMap.js
│   │   │   ├── ConnectionStatus.js
│   │   │   └── SignalStrength.js
│   │   ├── profile/            # User profile components
│   │   │   ├── ProfileForm.js
│   │   │   ├── ProfileDisplay.js
│   │   │   ├── EmergencyContacts.js
│   │   │   └── MedicalInfo.js
│   │   └── maps/               # Map-related components
│   │       ├── OfflineMap.js
│   │       ├── LocationMarker.js
│   │       ├── SOSMarker.js
│   │       └── UserMarker.js
│   │
│   ├── screens/                # Main app screens
│   │   ├── HomeScreen.js       # Main dashboard
│   │   ├── ProfileScreen.js    # User profile management
│   │   ├── ChatScreen.js       # Chat interface
│   │   ├── MapScreen.js        # Map view
│   │   ├── NetworkScreen.js    # Network status
│   │   ├── SettingsScreen.js   # App settings
│   │   └── EmergencyScreen.js  # Emergency interface
│   │
│   ├── navigation/             # Navigation configuration
│   │   ├── AppNavigator.js     # Main navigation
│   │   ├── TabNavigator.js     # Bottom tab navigation
│   │   └── StackNavigator.js   # Screen stack navigation
│   │
│   ├── styles/                 # Styling and themes
│   │   ├── colors.js           # Color palette
│   │   ├── typography.js       # Font definitions
│   │   ├── spacing.js          # Layout spacing
│   │   └── themes.js           # App themes
│   │
│   ├── utils/                  # Utility functions
│   │   ├── permissions.js      # Permission handling
│   │   ├── location.js         # GPS utilities
│   │   ├── time.js            # Time formatting
│   │   ├── validation.js       # Input validation
│   │   └── constants.js        # App constants
│   │
│   └── hooks/                  # Custom React hooks
│       ├── useBLE.js           # BLE operations hook
│       ├── useLocation.js      # GPS location hook
│       ├── usePermissions.js   # Permissions hook
│       └── useNetworkStatus.js # Network status hook
│
├── android/                    # Android-specific code
├── ios/                        # iOS-specific code
├── __tests__/                  # Test files
├── package.json                # Dependencies
├── metro.config.js             # Metro bundler config
├── babel.config.js             # Babel configuration
└── react-native.config.js     # React Native configuration
```

---

## 📡 BLE Core Structure

```
ble-core/
├── src/
│   ├── connection/             # Connection management
│   │   ├── BLEManager.js       # Main BLE operations
│   │   ├── Scanner.js          # Device discovery
│   │   ├── Advertiser.js       # Device advertising
│   │   ├── ConnectionPool.js   # Connection management
│   │   └── PairingManager.js   # Device pairing
│   │
│   ├── messaging/              # Message handling
│   │   ├── MessageManager.js   # Message coordination
│   │   ├── MessageQueue.js     # Message queuing
│   │   ├── MessageFormatter.js # Message formatting
│   │   └── MessageValidator.js # Message validation
│   │
│   ├── mesh/                   # Mesh networking
│   │   ├── MeshManager.js      # Mesh coordination
│   │   ├── RoutingTable.js     # Route management
│   │   ├── HopManager.js       # Multi-hop relay
│   │   └── NetworkTopology.js  # Network mapping
│   │
│   ├── protocols/              # Communication protocols
│   │   ├── SOSProtocol.js      # SOS message protocol
│   │   ├── ChatProtocol.js     # Chat message protocol
│   │   ├── InfoProtocol.js     # Information sharing protocol
│   │   └── HeartbeatProtocol.js # Keep-alive protocol
│   │
│   └── utils/                  # BLE utilities
│       ├── BLEConstants.js     # BLE constants and UUIDs
│       ├── BLEError.js         # Error handling
│       ├── BLELogger.js        # Logging utilities
│       └── BLEValidator.js     # BLE validation
│
├── __tests__/                  # BLE core tests
├── package.json                # Dependencies
└── README.md                   # BLE core documentation
```

---

## 🗄️ Data Layer Structure

```
data-layer/
├── src/
│   ├── storage/                # Data storage
│   │   ├── SQLiteManager.js    # SQLite operations
│   │   ├── AsyncStorageManager.js # Simple key-value storage
│   │   ├── CacheManager.js     # Data caching
│   │   └── BackupManager.js    # Data backup/restore
│   │
│   ├── models/                 # Data models
│   │   ├── User.js             # User profile model
│   │   ├── Message.js          # Message model
│   │   ├── Device.js           # Connected device model
│   │   ├── Location.js         # Location data model
│   │   └── Network.js          # Network state model
│   │
│   ├── repositories/           # Data access layer
│   │   ├── UserRepository.js   # User data operations
│   │   ├── MessageRepository.js # Message data operations
│   │   ├── DeviceRepository.js # Device data operations
│   │   └── LocationRepository.js # Location data operations
│   │
│   └── migrations/             # Database migrations
│       ├── 001_initial.sql     # Initial database schema
│       ├── 002_add_mesh.sql    # Mesh networking tables
│       └── 003_add_encryption.sql # Security enhancements
│
├── __tests__/                  # Data layer tests
├── package.json                # Dependencies
└── README.md                   # Data layer documentation
```

---

## 🗺️ Offline Maps Structure

```
offline-maps/
├── src/
│   ├── providers/              # Map data providers
│   │   ├── OpenStreetMap.js    # OSM tile provider
│   │   ├── MapboxOffline.js    # Mapbox offline tiles
│   │   └── CustomProvider.js   # Custom tile provider
│   │
│   ├── cache/                  # Map tile caching
│   │   ├── TileCache.js        # Tile caching system
│   │   ├── TileDownloader.js   # Offline tile download
│   │   └── CacheManager.js     # Cache management
│   │
│   ├── rendering/              # Map rendering
│   │   ├── MapRenderer.js      # Map display logic
│   │   ├── MarkerRenderer.js   # Marker display
│   │   └── OverlayRenderer.js  # Map overlays
│   │
│   └── utils/                  # Map utilities
│       ├── CoordinateUtils.js  # GPS coordinate utilities
│       ├── DistanceCalculator.js # Distance calculations
│       └── MapConstants.js     # Map configuration
│
├── tiles/                      # Offline map tiles (gitignored)
├── __tests__/                  # Map tests
├── package.json                # Dependencies
└── README.md                   # Maps documentation
```

---

## 🔒 Security Structure

```
security/
├── src/
│   ├── encryption/             # Encryption utilities
│   │   ├── MessageEncryption.js # Message encryption
│   │   ├── KeyManager.js       # Encryption key management
│   │   └── CryptoUtils.js      # Cryptographic utilities
│   │
│   ├── authentication/         # Authentication
│   │   ├── UserAuth.js         # User authentication
│   │   ├── DeviceAuth.js       # Device authentication
│   │   └── SOSVerification.js  # SOS verification system
│   │
│   └── privacy/                # Privacy protection
│       ├── DataAnonymizer.js   # Data anonymization
│       ├── PrivacyManager.js   # Privacy settings
│       └── ConsentManager.js   # User consent management
│
├── __tests__/                  # Security tests
├── package.json                # Dependencies
└── README.md                   # Security documentation
```

---

## 🧪 Testing Structure

```
testing/
├── unit/                       # Unit tests
│   ├── ble-core/              # BLE core unit tests
│   ├── mobile-app/            # App unit tests
│   ├── data-layer/            # Data layer unit tests
│   └── security/              # Security unit tests
│
├── integration/                # Integration tests
│   ├── ble-communication/     # BLE communication tests
│   ├── mesh-networking/       # Mesh network tests
│   └── end-to-end/            # Full app tests
│
├── performance/                # Performance tests
│   ├── battery-tests/         # Battery usage tests
│   ├── memory-tests/          # Memory usage tests
│   └── network-tests/         # Network performance tests
│
├── device-tests/               # Device-specific tests
│   ├── android/               # Android device tests
│   ├── ios/                   # iOS device tests
│   └── cross-platform/        # Cross-platform tests
│
├── fixtures/                   # Test data fixtures
│   ├── messages.json          # Sample messages
│   ├── profiles.json          # Sample user profiles
│   └── devices.json           # Sample device data
│
├── utilities/                  # Test utilities
│   ├── MockBLE.js            # BLE mocking utilities
│   ├── TestHelpers.js        # General test helpers
│   └── DeviceSimulator.js    # Device simulation
│
└── reports/                    # Test reports (gitignored)
    ├── coverage/              # Code coverage reports
    ├── performance/           # Performance test results
    └── device-compatibility/  # Device compatibility reports
```

---

## 📚 Documentation Structure

```
docs/
├── api/                        # API documentation
│   ├── ble-core-api.md       # BLE core API reference
│   ├── mobile-app-api.md     # Mobile app API reference
│   └── data-layer-api.md     # Data layer API reference
│
├── architecture/               # Architecture documentation
│   ├── system-overview.md     # High-level system overview
│   ├── ble-architecture.md    # BLE-specific architecture
│   ├── security-design.md     # Security architecture
│   └── mesh-design.md         # Mesh networking design
│
├── user-guides/                # User documentation
│   ├── installation.md        # Installation guide
│   ├── user-manual.md         # End-user manual
│   ├── troubleshooting.md     # Troubleshooting guide
│   └── faq.md                 # Frequently asked questions
│
├── developer-guides/           # Developer documentation
│   ├── setup-guide.md         # Development environment setup
│   ├── coding-standards.md    # Code style guidelines
│   ├── contribution-guide.md  # Contribution guidelines
│   └── deployment-guide.md    # Deployment instructions
│
└── technical-specs/            # Technical specifications
    ├── ble-specifications.md  # BLE technical specs
    ├── message-formats.md     # Message format specifications
    ├── protocol-definitions.md # Protocol definitions
    └── performance-requirements.md # Performance requirements
```

---

## 🔧 Scripts Structure

```
scripts/
├── build/                      # Build scripts
│   ├── build-android.sh       # Android build script
│   ├── build-ios.sh           # iOS build script
│   └── build-release.sh       # Release build script
│
├── deployment/                 # Deployment scripts
│   ├── deploy-android.sh      # Android deployment
│   ├── deploy-ios.sh          # iOS deployment
│   └── deploy-all.sh          # Full deployment
│
├── testing/                    # Testing scripts
│   ├── run-unit-tests.sh      # Unit test runner
│   ├── run-integration-tests.sh # Integration test runner
│   ├── run-performance-tests.sh # Performance test runner
│   └── generate-coverage.sh   # Coverage report generator
│
├── maintenance/                # Maintenance scripts
│   ├── cleanup.sh             # Clean build artifacts
│   ├── update-dependencies.sh # Update dependencies
│   └── backup-project.sh      # Project backup
│
└── utilities/                  # Utility scripts
    ├── setup-dev-environment.sh # Development setup
    ├── generate-docs.sh       # Documentation generator
    └── code-quality-check.sh  # Code quality analysis
```

---

## 📦 Root Level Files

```
BLE/
├── README.md                   # Project overview and setup
├── ROADMAP.md                  # Development roadmap ✅
├── PROJECT_TRACKER.md          # Progress tracking ✅
├── ISSUES.md                   # Issue tracking ✅
├── TESTING_STRATEGY.md         # Testing strategy ✅
├── PROJECT_STRUCTURE.md        # This file ✅
├── CHANGELOG.md                # Version history
├── LICENSE.md                  # Project license
├── .gitignore                  # Git ignore rules
├── .gitattributes             # Git attributes
├── package.json               # Root package dependencies
├── docker-compose.yml         # Development environment
└── Makefile                   # Build automation
```

---

## 🚀 Getting Started

To create this project structure:

```bash
# 1. Navigate to BLE directory
cd /Users/adityadway/project/BLE

# 2. Run project initialization script (once created)
./scripts/utilities/setup-dev-environment.sh

# 3. Or manually create the structure
mkdir -p mobile-app/src/{components,screens,navigation,styles,utils,hooks}
mkdir -p ble-core/src/{connection,messaging,mesh,protocols,utils}
mkdir -p data-layer/src/{storage,models,repositories,migrations}
mkdir -p offline-maps/src/{providers,cache,rendering,utils}
mkdir -p security/src/{encryption,authentication,privacy}
mkdir -p testing/{unit,integration,performance,device-tests,fixtures,utilities}
mkdir -p docs/{api,architecture,user-guides,developer-guides,technical-specs}
mkdir -p scripts/{build,deployment,testing,maintenance,utilities}
```

---

*This structure provides a scalable, maintainable foundation for the BLE Emergency SOS App with clear separation of concerns and comprehensive testing capabilities.*
