# LLM Benchmark Dashboard 2026

A simple, fast web dashboard for comparing latest open-source LLMs.

🔗 **Live Demo**: https://techsocialnetwork.github.io/llm-benchmark-dashboard/

## Features

- 📊 **12 latest models** (Gemma 4, Qwen 3.6, Llama 4, Mistral Small 4, DeepSeek R1)
- 🎯 **CPU feasibility** ratings for 64GB RAM systems
- 🔍 **Filter by**: Organization, Architecture, CPU compatibility
- 📈 **Benchmarks**: MMLU, HumanEval scores
- ⚡ **Real-time search**
- 📱 **Responsive design**

## Quick Start

```bash
# Clone
git clone https://github.com/techsocialnetwork/llm-benchmark-dashboard.git
cd llm-benchmark-dashboard

# Serve locally (any static server)
python -m http.server 8000
# or
npx serve .
```

Open http://localhost:8000

## Deploy to GitHub Pages

1. Push to GitHub
2. Go to Settings → Pages
3. Source: Deploy from branch
4. Branch: master → / (root)
5. Save

Site will be live at `https://yourusername.github.io/llm-benchmark-dashboard/`

## Data Sources

- Official model releases (Google, Meta, Alibaba, Mistral, DeepSeek)
- Hugging Face model cards
- Open LLM Leaderboard
- Local AI benchmark community

## Models Included

| Model | Org | Size | RAM | Best For |
|-------|-----|------|-----|----------|
| Gemma 4 26B A4B | Google | 26B (4B active) | 16GB | Best quality/speed balance |
| Gemma 4 E4B | Google | 4B | 8GB | Fast inference |
| Qwen 3.6 35B-A3B | Alibaba | 35B (3B active) | 20GB | Coding, multilingual |
| Llama 4 Scout | Meta | 109B (17B active) | 35GB | Large context (10M) |
| Mistral Small 4 | Mistral | 12B | 8GB | General use |
| DeepSeek R1 | DeepSeek | 671B (37B active) | 40GB | Reasoning |

## Credits

This dashboard is made possible by the open source AI community:

| Project | Description | License |
|---------|-------------|---------|
| [Google Gemma](https://ai.google.dev/gemma) | Open models from Google DeepMind | Apache 2.0 |
| [Meta Llama](https://llama.meta.com) | Open models from Meta AI | Llama 3.1/4 License |
| [Alibaba Qwen](https://qwenlm.github.io) | Multilingual models from Alibaba | Apache 2.0 / Qwen License |
| [Mistral AI](https://mistral.ai) | European open source models | Apache 2.0 |
| [DeepSeek](https://deepseek.ai) | Reasoning-focused models | DeepSeek License |
| [Hugging Face](https://huggingface.co) | Model hub and transformers | Apache 2.0 |
| [Ollama](https://ollama.com) | Local LLM runner | MIT |
| [LM Studio](https://lmstudio.ai) | Local LLM GUI | Proprietary (free) |
| [llama.cpp](https://github.com/ggerganov/llama.cpp) | Efficient LLM inference | MIT |
| [OpenRouter](https://openrouter.ai) | Unified API for LLMs | - |

## License

MIT License - See [LICENSE](LICENSE) file
