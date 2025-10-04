# Avinshi Platform Core

This folder contains the core production code for the Avinshi AI agent platform.

## Files

### Core Agents
- **`foundation_agents.py`** (26 KB) - Foundation agent implementations including project manager, requirements analyst, QA, and more
- **`orchestration_hub.py`** (3.7 KB) - Multi-agent orchestration and coordination system
- **`autogen_teams.py`** (11 KB) - AutoGen multi-agent team implementations
- **`semantic_kernel_enterprise.py`** (15 KB) - Microsoft Semantic Kernel integration for enterprise

### Configuration
- **`config.py`** - Platform configuration (API keys, agent settings, logging)
- **`requirements.txt`** - Python dependencies
- **`.env.example`** - Environment variables template (in root folder)

## Quick Start

### 1. Install Dependencies

```bash
cd platform
pip install -r requirements.txt
```

### 2. Configure Environment

Copy `.env.example` from root to `.env` and add your API keys:

```bash
cp ../.env.example ../.env
```

Required API keys:
- `OPENAI_API_KEY` - OpenAI API key
- `ANTHROPIC_API_KEY` - Anthropic API key (optional)
- `AZURE_OPENAI_KEY` - Azure OpenAI key (optional)

### 3. Run Orchestration Hub

```python
from orchestration_hub import AgentOrchestrator

# Initialize orchestrator
orchestrator = AgentOrchestrator()

# Execute task
result = orchestrator.execute_task({
    "type": "code_generation",
    "description": "Create a REST API endpoint for user authentication",
    "requirements": ["FastAPI", "JWT authentication", "PostgreSQL"]
})

print(result)
```

## Architecture

```
┌─────────────────────────────────────┐
│   Orchestration Hub                 │
│   - Task routing                    │
│   - Agent coordination              │
│   - Result aggregation              │
└──────────┬──────────────────────────┘
           │
     ┌─────┴─────┬──────────┬─────────┐
     ▼           ▼          ▼         ▼
┌─────────┐ ┌─────────┐ ┌──────┐ ┌──────┐
│Foundation│ │AutoGen  │ │Semantic│ │Lang- │
│  Agents │ │  Teams  │ │ Kernel │ │Chain │
└─────────┘ └─────────┘ └──────┘ └──────┘
```

## Agent Capabilities

### Foundation Agents (foundation_agents.py)
- **Project Manager** - Sprint planning, task breakdown, team coordination
- **Requirements Analyst** - Requirements gathering, user stories, acceptance criteria
- **Code Generator** - Full-stack code generation (React, FastAPI, database)
- **QA Engineer** - Test strategy, test automation, quality metrics
- **DevOps Engineer** - CI/CD, infrastructure, deployment automation

### AutoGen Teams (autogen_teams.py)
- **Development Team** - Multi-agent collaborative coding
- **Research Team** - Technical research and analysis
- **QA Team** - Comprehensive testing and validation

### Semantic Kernel (semantic_kernel_enterprise.py)
- **Planning** - Multi-step task decomposition
- **Memory** - Context and conversation history
- **Skills** - Reusable capabilities across agents

## Integration

### With Microsoft Frameworks
```python
from semantic_kernel_enterprise import EnterpriseKernel

kernel = EnterpriseKernel()
result = kernel.run_skill("CodeGeneration", "CreateAPI", {
    "framework": "FastAPI",
    "auth": "JWT"
})
```

### With AutoGen
```python
from autogen_teams import create_development_team

team = create_development_team()
result = team.solve_task("Build user authentication system")
```

## Production Deployment

See main README.md for deployment options:
- AWS (recommended)
- Azure
- Google Cloud
- On-premise Kubernetes

## Documentation

- **Main Docs**: See root `README.md`
- **API Reference**: Coming soon
- **Examples**: Coming soon

## Support

- GitHub Issues: https://github.com/avinshi/avinshi/issues
- Email: hello@avinshi.com
- Website: https://avinshi.com

## License

MIT License - See LICENSE file in root directory
