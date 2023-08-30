-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: sigma_schema
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `order_clients`
--

DROP TABLE IF EXISTS `order_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_clients` (
  `clientId` int NOT NULL AUTO_INCREMENT,
  `fullName` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address` varchar(100) NOT NULL,
  `phoneNumber` varchar(15) NOT NULL,
  `message` varchar(1000) DEFAULT NULL,
  `orderId` int unsigned NOT NULL,
  PRIMARY KEY (`clientId`),
  UNIQUE KEY `clientId_UNIQUE` (`clientId`),
  UNIQUE KEY `orderId_UNIQUE` (`orderId`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_clients`
--

LOCK TABLES `order_clients` WRITE;
/*!40000 ALTER TABLE `order_clients` DISABLE KEYS */;
INSERT INTO `order_clients` VALUES (13,'YURII VIPSHOVSKYI','vip.cool.ua@gmail.com','Тичини 15','0958962778','',3),(14,'VIP','super@email.com','Tuchuni 15','+380677553268','Deliver in 5 min',4);
/*!40000 ALTER TABLE `order_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order_products`
--

DROP TABLE IF EXISTS `order_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order_products` (
  `orderId` int unsigned NOT NULL,
  `productId` int NOT NULL,
  `count` int unsigned NOT NULL,
  KEY `productForeignKey_idx` (`productId`),
  KEY `orderForeignKey_idx` (`orderId`),
  CONSTRAINT `orderForeignKey` FOREIGN KEY (`orderId`) REFERENCES `order_clients` (`orderId`) ON DELETE CASCADE,
  CONSTRAINT `productForeignKey` FOREIGN KEY (`productId`) REFERENCES `product` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order_products`
--

LOCK TABLES `order_products` WRITE;
/*!40000 ALTER TABLE `order_products` DISABLE KEYS */;
INSERT INTO `order_products` VALUES (3,1,12),(3,2,1),(3,3,11),(3,7,1),(4,1,5),(4,2,3),(4,3,1),(4,7,3);
/*!40000 ALTER TABLE `order_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `category` varchar(45) NOT NULL,
  `image` varchar(50) DEFAULT NULL,
  `oldprice` decimal(10,0) DEFAULT NULL,
  `newprice` decimal(10,0) NOT NULL,
  `smallDescription` varchar(500) DEFAULT NULL,
  `productDescription` varchar(1000) DEFAULT NULL,
  `additionalInfo` varchar(1000) DEFAULT NULL,
  `rating` int unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Calabrese Broccoli','Vegetable','Brocoli.png',20,13,'Calabrese Broccoli Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley.','Calabrese Broccoli Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Calabrese Broccoli Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',1),(2,'Fresh Banana Fruites','Fresh','Banana.jpg',20,14,'Fresh Banana Fruites  Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Fresh Banana Fruites Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Fresh Banana Fruites Fresh Banana Fruites',5),(3,'White Nuts','Millets','WhiteNuts.jpg',20,15,'White Nuts Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','White Nuts Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','White Nuts Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',3),(4,'Vegan Red Tomato','Vegetable','Tomatoes.jpg',20,17,'Vegan Red Tomato Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Vegan Red Tomato Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Vegan Red Tomato Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',4),(5,'Mung Bean','Health','MungBean.jpg',20,11,'Mung Bean Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Mung Bean Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Mung Bean Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',4),(6,'Brown Hazelnut','Nuts','BrownHazernut.jpg',20,12,'Brown Hazelnut Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Brown Hazelnut Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Brown Hazelnut Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',2),(7,'Eggs','Fresh','Eggs.jpg',20,17,'Eggs Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Eggs Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Eggs Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',5),(8,'Zelco Suji Elaichi Rusk','Fresh','Bread.jpg',20,15,'Zelco Suji Elaichi Rusk Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Zelco Suji Elaichi Rusk Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Zelco Suji Elaichi Rusk Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',5),(9,'Zucchini','Health','Zucchini.jpg',20,11,'Zucchini Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Zucchini Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Zucchini Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',1),(10,'White Hazelnut','Nuts','WhiteHazelnut.jpg',20,12,'White Hazelnut Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','White Hazelnut Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','White Hazelnut Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',4),(11,'Fresh Corn','Fresh','Corn.jpg',20,17,'Fresh Corn Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Fresh Corn Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Fresh Corn Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',5),(12,'Organic Almonds','Fresh','Almonds.jpg',NULL,15,'Organic Almonds Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Organic Almonds Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Organic Almonds Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',4),(13,'Wide Brocoli','Vegetable','WideBrocoli.jpg',NULL,11,'Wide Brocoli Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Wide Brocoli Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Wide Brocoli Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',1),(14,'Wide Zucchini','Vegetable','WideZucchini.jpg',NULL,12,'Wide Zucchini Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Wide Zucchini Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Wide Zucchini Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',1),(15,'Onion','Vegetable','Onion.jpg',NULL,17,'Onion Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Onion Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Onion Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',3),(16,'Cabbage','Vegetable','Cabbage.jpg',NULL,17,'Cabbage Small Description Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley','Cabbage Product Description  Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.','Cabbage Additional Info A refrigerator is the best place to store pistachios if you don\'t plan to eat them all right away. Package them in an airtight container (Ziplock, Tupperware, jar with tight lid) and they will stay fresh for up to a year. An airtight package helps prevent condensation, which would make them lose their crunch.',4);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-30 14:19:08
