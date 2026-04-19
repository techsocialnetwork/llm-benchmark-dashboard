        // Extended LLM Data - 35+ Models from last year
        const models = [
            // Gemma Family
            { name: "Gemma 4 E4B", org: "Google", size: "4B", ram: 8, mmlu: 78.5, humaneval: 72.3, speed: "Fast", arch: "Dense", isNew: true, release: "Apr 2026" },
            { name: "Gemma 4 26B A4B", org: "Google", size: "26B (4B active)", ram: 16, mmlu: 85.2, humaneval: 81.7, speed: "Moderate", arch: "MoE", isNew: true, release: "Apr 2026" },
            { name: "Gemma 4 31B", org: "Google", size: "31B", ram: 62, mmlu: 87.1, humaneval: 84.2, speed: "Slow", arch: "Dense", isNew: true, release: "Apr 2026" },
            { name: "Gemma 4 E2B", org: "Google", size: "2B", ram: 4, mmlu: 71.2, humaneval: 65.8, speed: "Very Fast", arch: "Dense", isNew: true, release: "Apr 2026" },
            { name: "Gemma 3 27B", org: "Google", size: "27B", ram: 18, mmlu: 79.8, humaneval: 74.2, speed: "Moderate", arch: "Dense", isNew: false, release: "Mar 2025" },
            { name: "Gemma 3 12B", org: "Google", size: "12B", ram: 10, mmlu: 77.3, humaneval: 71.5, speed: "Fast", arch: "Dense", isNew: false, release: "Mar 2025" },
            { name: "Gemma 3 4B", org: "Google", size: "4B", ram: 6, mmlu: 72.1, humaneval: 66.4, speed: "Fast", arch: "Dense", isNew: false, release: "Mar 2025" },
            { name: "Gemma 2 27B", org: "Google", size: "27B", ram: 18, mmlu: 75.2, humaneval: 69.8, speed: "Moderate", arch: "Dense", isNew: false, release: "Jun 2024" },
            { name: "Gemma 2 9B", org: "Google", size: "9B", ram: 7, mmlu: 71.8, humaneval: 65.2, speed: "Fast", arch: "Dense", isNew: false, release: "Jun 2024" },
            { name: "Gemma 2 2B", org: "Google", size: "2B", ram: 3, mmlu: 66.5, humaneval: 58.4, speed: "Very Fast", arch: "Dense", isNew: false, release: "Jun 2024" },
            
            // Llama Family
            { name: "Llama 4 Scout", org: "Meta", size: "109B (17B active)", ram: 35, mmlu: 86.5, humaneval: 82.1, speed: "Slow", arch: "MoE", isNew: false, release: "Apr 2025" },
            { name: "Llama 4 Maverick", org: "Meta", size: "400B (17B active)", ram: 40, mmlu: 88.2, humaneval: 85.3, speed: "Slow", arch: "MoE", isNew: false, release: "Apr 2025" },
            { name: "Llama 3.3 70B", org: "Meta", size: "70B", ram: 55, mmlu: 86.1, humaneval: 81.2, speed: "Slow", arch: "Dense", isNew: false, release: "Dec 2024" },
            { name: "Llama 3.2 90B", org: "Meta", size: "90B (9B active)", ram: 22, mmlu: 84.8, humaneval: 79.5, speed: "Moderate", arch: "MoE", isNew: false, release: "Sep 2024" },
            { name: "Llama 3.2 11B", org: "Meta", size: "11B", ram: 8, mmlu: 78.2, humaneval: 72.1, speed: "Fast", arch: "Dense", isNew: false, release: "Sep 2024" },
            { name: "Llama 3.2 3B", org: "Meta", size: "3B", ram: 3, mmlu: 68.5, humaneval: 61.2, speed: "Very Fast", arch: "Dense", isNew: false, release: "Sep 2024" },
            { name: "Llama 3.1 405B", org: "Meta", size: "405B", ram: 85, mmlu: 87.3, humaneval: 83.9, speed: "Very Slow", arch: "Dense", isNew: false, release: "Jul 2024" },
            { name: "Llama 3.1 70B", org: "Meta", size: "70B", ram: 55, mmlu: 84.2, humaneval: 78.6, speed: "Slow", arch: "Dense", isNew: false, release: "Jul 2024" },
            { name: "Llama 3.1 8B", org: "Meta", size: "8B", ram: 6, mmlu: 73.8, humaneval: 67.5, speed: "Fast", arch: "Dense", isNew: false, release: "Jul 2024" },
            { name: "Llama 3 70B", org: "Meta", size: "70B", ram: 55, mmlu: 82.0, humaneval: 76.2, speed: "Slow", arch: "Dense", isNew: false, release: "Apr 2024" },
            { name: "Llama 3 8B", org: "Meta", size: "8B", ram: 6, mmlu: 68.4, humaneval: 62.2, speed: "Fast", arch: "Dense", isNew: false, release: "Apr 2024" },
            
            // Qwen Family
            { name: "Qwen 3.6 35B-A3B", org: "Alibaba", size: "35B (3B active)", ram: 20, mmlu: 83.8, humaneval: 79.4, speed: "Moderate", arch: "MoE", isNew: true, release: "Apr 2026" },
            { name: "Qwen 3.5 72B", org: "Alibaba", size: "72B", ram: 58, mmlu: 86.2, humaneval: 82.1, speed: "Slow", arch: "Dense", isNew: false, release: "Nov 2025" },
            { name: "Qwen 3.5 32B", org: "Alibaba", size: "32B", ram: 25, mmlu: 83.5, humaneval: 78.8, speed: "Moderate", arch: "Dense", isNew: false, release: "Nov 2025" },
            { name: "Qwen 3.5 14B", org: "Alibaba", size: "14B", ram: 11, mmlu: 80.1, humaneval: 74.2, speed: "Fast", arch: "Dense", isNew: false, release: "Nov 2025" },
            { name: "Qwen 3.5 7B", org: "Alibaba", size: "7B", ram: 6, mmlu: 74.5, humaneval: 68.9, speed: "Fast", arch: "Dense", isNew: false, release: "Nov 2025" },
            { name: "Qwen 2.5 72B", org: "Alibaba", size: "72B", ram: 58, mmlu: 85.1, humaneval: 81.3, speed: "Slow", arch: "Dense", isNew: false, release: "Sep 2025" },
            { name: "Qwen 2.5 32B", org: "Alibaba", size: "32B", ram: 25, mmlu: 82.8, humaneval: 78.1, speed: "Moderate", arch: "Dense", isNew: false, release: "Sep 2025" },
            { name: "Qwen 2.5 14B", org: "Alibaba", size: "14B", ram: 11, mmlu: 79.5, humaneval: 73.8, speed: "Fast", arch: "Dense", isNew: false, release: "Sep 2025" },
            { name: "Qwen 2.5 7B", org: "Alibaba", size: "7B", ram: 6, mmlu: 74.2, humaneval: 68.2, speed: "Fast", arch: "Dense", isNew: false, release: "Sep 2025" },
            
            // Mistral Family
            { name: "Mistral Small 4", org: "Mistral", size: "12B", ram: 8, mmlu: 76.8, humaneval: 70.2, speed: "Fast", arch: "Dense", isNew: true, release: "Mar 2026" },
            { name: "Mistral Large 2", org: "Mistral", size: "123B", ram: 65, mmlu: 84.2, humaneval: 80.5, speed: "Slow", arch: "Dense", isNew: false, release: "Jul 2024" },
            { name: "Mixtral 8x22B", org: "Mistral", size: "176B (44B active)", ram: 50, mmlu: 84.7, humaneval: 80.1, speed: "Slow", arch: "MoE", isNew: false, release: "Apr 2024" },
            { name: "Mixtral 8x7B", org: "Mistral", size: "56B (12B active)", ram: 15, mmlu: 77.8, humaneval: 71.5, speed: "Fast", arch: "MoE", isNew: false, release: "Dec 2023" },
            { name: "Mistral 7B", org: "Mistral", size: "7B", ram: 5, mmlu: 71.2, humaneval: 64.8, speed: "Very Fast", arch: "Dense", isNew: false, release: "Sep 2023" },
            
            // DeepSeek Family
            { name: "DeepSeek R1", org: "DeepSeek", size: "671B (37B active)", ram: 40, mmlu: 90.2, humaneval: 89.7, speed: "Slow", arch: "MoE", isNew: false, release: "Jan 2026" },
            { name: "DeepSeek V3", org: "DeepSeek", size: "671B (37B active)", ram: 40, mmlu: 87.1, humaneval: 82.3, speed: "Slow", arch: "MoE", isNew: false, release: "Dec 2024" },
            { name: "DeepSeek Coder V2", org: "DeepSeek", size: "236B (21B active)", ram: 25, mmlu: 81.5, humaneval: 85.2, speed: "Moderate", arch: "MoE", isNew: false, release: "Jun 2024" },
            
            // Other Models
            { name: "Phi-4 14B", org: "Microsoft", size: "14B", ram: 10, mmlu: 81.2, humaneval: 75.8, speed: "Fast", arch: "Dense", isNew: true, release: "Jan 2026" },
            { name: "Phi-3 Medium", org: "Microsoft", size: "14B", ram: 10, mmlu: 77.5, humaneval: 70.2, speed: "Fast", arch: "Dense", isNew: false, release: "May 2024" },
            { name: "Phi-3 Small", org: "Microsoft", size: "7B", ram: 5, mmlu: 72.8, humaneval: 65.4, speed: "Very Fast", arch: "Dense", isNew: false, release: "May 2024" },
            { name: "Phi-3 Mini", org: "Microsoft", size: "3.8B", ram: 3, mmlu: 68.5, humaneval: 59.8, speed: "Very Fast", arch: "Dense", isNew: false, release: "Apr 2024" },
            { name: "Nemotron 4 340B", org: "NVIDIA", size: "340B", ram: 80, mmlu: 88.9, humaneval: 86.4, speed: "Very Slow", arch: "Dense", isNew: false, release: "Jun 2024" },
            { name: "Command R+", org: "Cohere", size: "104B", ram: 52, mmlu: 83.5, humaneval: 78.2, speed: "Slow", arch: "Dense", isNew: false, release: "Apr 2024" },
            { name: "Command R", org: "Cohere", size: "35B", ram: 22, mmlu: 79.2, humaneval: 72.8, speed: "Moderate", arch: "Dense", isNew: false, release: "Mar 2024" },
            { name: "DBRX", org: "Databricks", size: "132B (36B active)", ram: 42, mmlu: 82.1, humaneval: 76.5, speed: "Slow", arch: "MoE", isNew: false, release: "Mar 2024" }
        ];
