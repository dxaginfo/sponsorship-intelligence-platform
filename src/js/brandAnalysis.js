/**
 * Sponsorship Intelligence Platform
 * Brand Analysis Module
 * 
 * This module contains the core algorithms for analyzing brand-sponsor compatibility
 * In a production environment, most of this logic would be implemented server-side
 * with machine learning models, but this client-side implementation demonstrates the concept.
 */

/**
 * BrandAnalysis class to handle compatibility assessments
 */
class BrandAnalysis {
    /**
     * Initialize the BrandAnalysis module
     */
    constructor() {
        // Sample industry compatibility matrix
        this.industryMatrix = {
            'technology': {
                'sports-team': 0.85,
                'league': 0.80,
                'event': 0.75,
                'venue': 0.70,
                'athlete': 0.90,
                'entertainment': 0.85
            },
            'finance': {
                'sports-team': 0.80,
                'league': 0.90,
                'event': 0.75,
                'venue': 0.85,
                'athlete': 0.70,
                'entertainment': 0.65
            },
            'retail': {
                'sports-team': 0.85,
                'league': 0.75,
                'event': 0.90,
                'venue': 0.80,
                'athlete': 0.85,
                'entertainment': 0.90
            },
            'automotive': {
                'sports-team': 0.90,
                'league': 0.85,
                'event': 0.80,
                'venue': 0.75,
                'athlete': 0.95,
                'entertainment': 0.70
            },
            'food': {
                'sports-team': 0.85,
                'league': 0.80,
                'event': 0.95,
                'venue': 0.90,
                'athlete': 0.85,
                'entertainment': 0.80
            },
            'healthcare': {
                'sports-team': 0.80,
                'league': 0.75,
                'event': 0.70,
                'venue': 0.65,
                'athlete': 0.90,
                'entertainment': 0.60
            }
        };
        
        // Sample values compatibility scores
        this.valuesCompatibility = {
            'innovation': {
                'innovation': 1.0,
                'reliability': 0.7,
                'sustainability': 0.8,
                'inclusivity': 0.7,
                'performance': 0.9,
                'tradition': 0.5,
                'luxury': 0.6,
                'accessibility': 0.7,
                'adventure': 0.8,
                'creativity': 0.9
            },
            'reliability': {
                'innovation': 0.7,
                'reliability': 1.0,
                'sustainability': 0.8,
                'inclusivity': 0.7,
                'performance': 0.8,
                'tradition': 0.9,
                'luxury': 0.7,
                'accessibility': 0.8,
                'adventure': 0.5,
                'creativity': 0.6
            },
            // ... other values compatibility scores would be defined here
        };
    }
    
    /**
     * Analyze compatibility between a brand and a sponsor
     * @param {Object} brandData - Data about the brand
     * @param {Object} sponsorData - Data about the sponsor
     * @returns {Object} Compatibility scores
     */
    analyzeCompatibility(brandData, sponsorData) {
        // Get base scores from industry matrix
        const industryScore = this.getIndustryCompatibility(
            brandData.industry,
            sponsorData.type
        );
        
        // Calculate values alignment score
        const valuesScore = this.calculateValuesAlignment(
            brandData.values,
            sponsorData.values
        );
        
        // Calculate audience overlap
        const audienceScore = this.calculateAudienceOverlap(
            brandData.audience,
            sponsorData.audience
        );
        
        // Calculate voice consistency
        const voiceScore = 0.75; // Placeholder - would use NLP in a real implementation
        
        // Calculate integration potential
        const integrationScore = this.calculateIntegrationPotential(
            brandData,
            sponsorData
        );
        
        // Calculate cultural relevance (placeholder)
        const culturalScore = 0.82;
        
        // Calculate co-creation opportunity (placeholder)
        const cocreationScore = 0.88;
        
        // Calculate overall score as weighted average
        const overallScore = Math.round(
            (industryScore * 0.15) +
            (valuesScore * 0.25) +
            (audienceScore * 0.25) +
            (voiceScore * 0.15) +
            (integrationScore * 0.20)
        );
        
        return {
            overall: overallScore,
            industry: Math.round(industryScore * 100),
            values: Math.round(valuesScore * 100),
            audience: Math.round(audienceScore * 100),
            voice: Math.round(voiceScore * 100),
            integration: Math.round(integrationScore * 100),
            cultural: Math.round(culturalScore * 100),
            cocreation: Math.round(cocreationScore * 100)
        };
    }
    
    /**
     * Get industry compatibility score
     * @param {string} brandIndustry - Brand's industry
     * @param {string} sponsorType - Sponsor's type
     * @returns {number} Compatibility score (0-1)
     */
    getIndustryCompatibility(brandIndustry, sponsorType) {
        // Default to average compatibility if not found
        if (!this.industryMatrix[brandIndustry]) return 0.7;
        if (!this.industryMatrix[brandIndustry][sponsorType]) return 0.7;
        
        return this.industryMatrix[brandIndustry][sponsorType];
    }
    
    /**
     * Calculate values alignment between brand and sponsor
     * @param {Array} brandValues - Array of brand values
     * @param {Array} sponsorValues - Array of sponsor values
     * @returns {number} Alignment score (0-1)
     */
    calculateValuesAlignment(brandValues, sponsorValues) {
        if (!brandValues || !sponsorValues || brandValues.length === 0 || sponsorValues.length === 0) {
            return 0.5; // Default if no values provided
        }
        
        let totalScore = 0;
        let comparisons = 0;
        
        // Compare each brand value with each sponsor value
        for (const brandValue of brandValues) {
            for (const sponsorValue of sponsorValues) {
                // Get compatibility score from matrix or default to 0.5
                const score = this.valuesCompatibility[brandValue] && 
                             this.valuesCompatibility[brandValue][sponsorValue] ?
                             this.valuesCompatibility[brandValue][sponsorValue] : 0.5;
                
                totalScore += score;
                comparisons++;
            }
        }
        
        // Calculate average score
        return comparisons > 0 ? totalScore / comparisons : 0.5;
    }
    
    /**
     * Calculate audience overlap between brand and sponsor
     * This is a simplified implementation - a real version would use
     * demographic data analysis and audience segmentation
     * 
     * @param {string} brandAudience - Brand audience description
     * @param {string} sponsorAudience - Sponsor audience description
     * @returns {number} Overlap score (0-1)
     */
    calculateAudienceOverlap(brandAudience, sponsorAudience) {
        if (!brandAudience || !sponsorAudience) return 0.5;
        
        // In a real implementation, we would use NLP to analyze the text
        // and extract demographic information, interests, etc.
        // For this demo, we'll just do simple text comparison
        
        // Normalize and tokenize the text
        const brandTokens = this.tokenizeText(brandAudience);
        const sponsorTokens = this.tokenizeText(sponsorAudience);
        
        // Count matching tokens
        let matches = 0;
        for (const token of brandTokens) {
            if (sponsorTokens.includes(token)) {
                matches++;
            }
        }
        
        // Calculate Jaccard similarity
        const union = new Set([...brandTokens, ...sponsorTokens]).size;
        const similarity = union > 0 ? matches / union : 0;
        
        // Scale similarity to a reasonable range (0.4-0.95)
        return 0.4 + (similarity * 0.55);
    }
    
    /**
     * Calculate integration potential
     * @param {Object} brandData - Brand data
     * @param {Object} sponsorData - Sponsor data
     * @returns {number} Integration potential score (0-1)
     */
    calculateIntegrationPotential(brandData, sponsorData) {
        // This would be a complex calculation in a real implementation
        // For now, we'll return a placeholder value that would typically
        // be determined by analyzing historical sponsorship data and success patterns
        return 0.85;
    }
    
    /**
     * Tokenize text for simple comparison
     * @param {string} text - Text to tokenize
     * @returns {Array} Array of tokens
     */
    tokenizeText(text) {
        if (!text) return [];
        
        // Convert to lowercase
        const lowerText = text.toLowerCase();
        
        // Remove punctuation and split by whitespace
        const tokens = lowerText.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
                               .split(/\s+/);
        
        // Remove stop words (a small sample - a real implementation would have more)
        const stopWords = ['the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were',
                          'in', 'on', 'at', 'to', 'for', 'with', 'by', 'about', 'of'];
        
        return tokens.filter(token => !stopWords.includes(token));
    }
}

// Export the BrandAnalysis class
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrandAnalysis;
} else {
    // For browser environment
    window.BrandAnalysis = BrandAnalysis;
}