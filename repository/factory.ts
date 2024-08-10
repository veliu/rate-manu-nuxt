import { type $Fetch, type FetchOptions } from "ofetch";

class HttpFactory<T> {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  async call(
    method: string,
    url: string,
    data?: object,
    fetchOptions?: FetchOptions<"json">,
  ): Promise<T> {
    return this.$fetch<T>(url, { method, body: data, ...fetchOptions });
  }
}

export default HttpFactory;
