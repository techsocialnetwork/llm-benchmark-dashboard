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

## License

MIT
