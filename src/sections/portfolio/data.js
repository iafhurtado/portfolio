import Image1 from '../../assets/project1.png'
import Image2 from '../../assets/project2.png'
import Image3 from '../../assets/project3.png'
import Image4 from '../../assets/project4.png'
import Image5 from '../../assets/project5.png'
import Image6 from '../../assets/project6.jpg'
import Image7 from '../../assets/project7.png'
import Image8 from '../../assets/project8.png'
import Image9 from '../../assets/project9.png'

const data = [
    {
        id: 1,
        category: 'uiux',
        image: Image1,
        title: "Web & Mobile Application (UIUX)",
        desc: "The solution was to create a web app using React and a mobile app using Iconic which are both light-weight open-source software frameworks that allowed us to quickly deploy components that are easy to use and can be stacked together easily as the application grows in size.",
        demo: 'https://www.figma.com/proto/BhN4t76z2EBzIj3wzV5Uhd/PMS-Tickettool?page-id=0%3A1&node-id=31%3A104&viewport=405%2C131%2C0.03&scaling=contain',
        github: 'https://www.figma.com/file/BhN4t76z2EBzIj3wzV5Uhd/PMS-Tickettool?t=dOCla21egILpWCb0-1'
    },
    {
        id: 2,
        category: 'product management',
        image: Image2,
        title: "DeFi Portfolio Tracker (Product Management)",
        desc: "The task was to build a DeFi Portfolio Tracker a.k.a. an application to track an EVM wallet similar to what Zapper and Zerion do today but with more granular and specific data insights. The project was to perform Discovery for this application before building it.",
        demo: 'https://www.figma.com/proto/mfIrvQBy4ni3RadCfR9MCU/DeFi-Portfolio-Tracker?page-id=0%3A1&node-id=195%3A84&viewport=751%2C485%2C0.11&scaling=min-zoom',
        github: 'https://www.figma.com/file/mfIrvQBy4ni3RadCfR9MCU/DeFi-Portfolio-Tracker?node-id=708%3A9717&t=SSxJsPrfAkziF54T-1'
    },
    {
        id: 3,
        category: 'product management',
        image: Image3,
        title: "Fulfillment Integration App (Product Management)",
        desc: "The goal of this project was to draft a 5-10 page PRD for an e-commerce fulfillment integration in the Shopify appstore. In the first phase of this project, I was asked with benchmarking other apps in this space and then document how this application's features and functionality would look like.",
        demo: 'https://www.figma.com/proto/5Ht4EtQC2wHsN2gBPBXBHy/Fulfillment-Integration-App?page-id=0%3A1&node-id=901%3A2&viewport=817%2C429%2C0.3&scaling=min-zoom',
        github: 'https://www.figma.com/file/5Ht4EtQC2wHsN2gBPBXBHy/Fulfillment-Integration-App?node-id=901%3A2&t=mDzdGJdCLs9IhmSz-1'
    },
    {
        id: 4,
        category: 'uiux',
        image: Image4,
        title: "Whistleblower App (UIUX)",
        desc: "The goal of this project was to design a whistleblower app that would allow users to report any wrongdoing in their organization. The app would allow users to report anonymously and would allow the organization to track the progress of the report.",
        demo: 'https://www.figma.com/proto/5jqZRHGnLA4mvxWIi49y6f/Whistleblower-App?page-id=0%3A1&node-id=148%3A167&viewport=1176%2C424%2C0.1&scaling=min-zoom',
        github: 'https://www.figma.com/file/5jqZRHGnLA4mvxWIi49y6f/Whistleblower-App?node-id=148%3A167&t=ZdzJtfFZFu0ysLhg-1'
    },
    {
        id: 5,
        category: 'product management',
        image: Image5,
        title: "Privacy and Compliance Platform (Product Management)",
        desc: "The goal of this project was to design a privacy and compliance platform that would allow users to manage their privacy and compliance needs. The platform would allow users to manage their privacy and compliance needs. ",
        demo: 'https://www.figma.com/proto/9cLmfKL5LTwAWIbK9GJn1n/Privacy24?page-id=553%3A0&node-id=553%3A582&viewport=1405%2C2191%2C0.49&scaling=min-zoom',
        github: 'https://www.figma.com/file/9cLmfKL5LTwAWIbK9GJn1n/Privacy24?node-id=553%3A582&t=JGzM7RTQ9f1keMEP-1'
    },
    {
        id: 6,
        category: 'uiux',
        image: Image6,
        title: "Customer Journey Map (UIUX)",
        desc: "This framework is a usual go-to tactic for my team when we are trying to understand the customer journey. It is a great way to visualize the customer journey and to identify the pain points and opportunities for improvement.",
        demo: 'http://egatortutorials.com',
        github: 'https://github.com/egattor'
    },
    {
        id: 7,
        category: 'frontend',
        image: Image7,
        title: "NFT Minter (Frontend)",
        desc: "This is my 1st build as part of BuidlGuidl, a community of web3 builders using Scaffold-eth-2 to build quick Frontends connecting any smart contracts on any EVM chain. You can mint yourself a COFFEE NFT in Sepolia and trade it on OpenSea(testnet).",
        demo: 'https://nftminter-pi.vercel.app/mintnft',
        github: 'https://github.com/iafhurtado/nftminter'
    },
    {
        id: 8,
        category: 'frontend',
        image: Image8,
        title: "ERC20 Token Vendor (Frontend)",
        desc: "This is a simple web3 build displaying the smart contracts of an ERC20 token vendor. The frontend was built using Scaffold-Eth(1) and the smart contracts were deployed on the Sepolia testnet using Hardhat.",
        demo: 'https://ignorant-selection.surge.sh/',
        github: 'https://sepolia.etherscan.io/address/0xd5f7bdc0eabfc86b4459abdd6875a8cd3b8193c2#code'
    },
    {
        id: 9,
        category: 'product management',
        image: Image9,
        title: "Xocolatl Mexican Stablecoin (Product Management)",
        desc: "This project was born during ETHMexico 2021. The goal of this project was to create a mexican stablecoin that would be backed by (Wrapped) Ether. Pioneering project in the Mexican DeFi space.",
        demo: 'https://xocolatl.finance/',
        github: 'https://github.com/La-DAO'
    }
]


export default data