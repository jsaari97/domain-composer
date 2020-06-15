import { promises as dns } from "dns";

export const available = async (domain: string): Promise<boolean> => {
  try {
    await dns.lookup(domain);

    return Promise.reject("domain is already registered.");
  } catch (error) {
    return Promise.resolve(true);
  }
};
