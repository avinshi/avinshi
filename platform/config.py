"""
Avinshi Platform Configuration

Central configuration for the AI agent platform.
"""

import os
from pathlib import Path
from typing import Optional
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

class Config:
    """Platform configuration settings"""
    
    # Project Info
    PROJECT_NAME = "avinshi"
    VERSION = "1.0.0"
    DESCRIPTION = "ai agents that code, test, deploy, and optimize—autonomously"
    
    # Paths
    BASE_DIR = Path(__file__).parent
    ROOT_DIR = BASE_DIR.parent
    
    # API Keys (from environment variables)
    OPENAI_API_KEY: Optional[str] = os.getenv("OPENAI_API_KEY")
    ANTHROPIC_API_KEY: Optional[str] = os.getenv("ANTHROPIC_API_KEY")
    AZURE_OPENAI_KEY: Optional[str] = os.getenv("AZURE_OPENAI_KEY")
    AZURE_OPENAI_ENDPOINT: Optional[str] = os.getenv("AZURE_OPENAI_ENDPOINT")
    
    # Agent Settings
    MAX_AGENTS = 65
    DEFAULT_MODEL = "gpt-4"
    MAX_RETRIES = 3
    TIMEOUT_SECONDS = 300
    
    # Logging
    LOG_LEVEL = os.getenv("LOG_LEVEL", "INFO")
    LOG_FORMAT = "%(asctime)s - %(name)s - %(levelname)s - %(message)s"
    
    # Performance
    ENABLE_CACHING = True
    CACHE_TTL = 3600  # 1 hour
    MAX_CONCURRENT_AGENTS = 10
    
    @classmethod
    def validate(cls) -> bool:
        """Validate configuration"""
        if not cls.OPENAI_API_KEY and not cls.ANTHROPIC_API_KEY:
            print("⚠️  Warning: No API keys configured. Set OPENAI_API_KEY or ANTHROPIC_API_KEY")
            return False
        return True

# Initialize config
config = Config()
