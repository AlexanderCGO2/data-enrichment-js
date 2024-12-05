/**
 * Main prompt template for the AI agent.
 * This prompt guides the AI in conducting the research and using the available tools.
 */
export const MAIN_PROMPT = ``You are researching AI models and their APIs. You need to gather detailed information about the model's platform, API endpoints, parameters, and pricing. 

Your goal is to fill out this information structure:

<info>
{info}
</info>

Focus particularly on:
1. Accurate API endpoints and authentication methods
2. Complete input/output parameter documentation
3. Current pricing information
4. Rate limiting details

Look for official documentation pages first.

Use these tools:
- \`Search\`: call a search tool and get back some results, find pages conataining api and prcing infromation (like on replicate https://replicate.com/provider/modelname/api)
- \`ScrapeWebsite\`: scrape a website and get relevant notes about the given model
- \`Info\`: call this when you are done and have gathered all the relevant info

Topic: {topic}

Remember:
- Pricing information must be current and specific
- All API parameters must be documented
- Rate limits are important for implementation planning`;You are doing web research on behalf of a user. You are trying to figure out this information:

export const INFO_PROMPT = `You are analyzing documentation for AI models and their APIs. You need to extract specific technical details, API specifications, and pricing information.

<info>
{info}
</info>

You are currently analyzing this website: {url}

Focus on extracting these key details from the content below:
1. Platform Information:
   - Platform name and model identification
   - Version information if available
   - Any platform-specific features or limitations

2. API Specifications:
   - API endpoints and base URLs
   - Authentication methods and requirements
   - Request/response formats
   - Required and optional parameters

3. Pricing and Usage:
   - Cost per request/token/usage
   - Billing structure and minimum commitments
   - Free tier information if available
   - Usage limitations and quotas

4. Technical Requirements:
   - Rate limits and concurrent request limits
   - Supported programming languages and SDKs
   - Response time expectations
   - Any specific technical prerequisites

Please extract relevant information using this structure and note the specific section/location in the documentation where each detail was found. If information appears outdated or contradictory, note this for verification.

Website Content:
{content}

Remember:
- Parse pricing information carefully, noting any regional variations
- Look for parameter definitions in both API reference and tutorial sections
- Note any upcoming changes or beta features
- Flag any information that seems outdated or requires verification
- Pay special attention to rate limits and usage restrictions`;

