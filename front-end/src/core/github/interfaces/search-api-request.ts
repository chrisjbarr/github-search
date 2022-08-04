/**
 * Represents the shape of a request to the GitHub Search Rest API
 * Learn more: https://docs.github.com/en/rest/search
 */
interface SearchApiRequest {
  /**
   * The query contains one or more search keywords and qualifiers. Qualifiers allow you to limit your search to specific areas of GitHub. The REST API supports the same qualifiers as the web interface for GitHub.
   * To learn more: https://docs.github.com/en/rest/search#constructing-a-search-query
   */
  q: string;

  /**
   * Sorts the results of your query by number of followers or repositories, or when the person joined GitHub.
   * Default: best match
   */
  sort: string;

  /**
   * Determines whether the first search result returned is the highest number of matches (desc) or lowest number of matches (asc). This parameter is ignored unless you provide sort.
   */
  order: string;

  /**
   * The number of results per page (max 100).
   * Default: 100
   */
  perPage: number;

  /**
   * Page number of the results to fetch.
   * Default 1
   */
  page: number;
}
