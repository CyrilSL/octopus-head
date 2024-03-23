import { MedusaRequest, MedusaResponse } from "@medusajs/medusa";
import StoreService from "src/services/store"; // Adjust the import path as necessary
import DomainService from "src/services/domain";

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  try {
    const domain = req.query.domain; // Assuming the domain is passed as a query parameter
    if (!domain) {
      return res.status(400).json({ message: "Domain is required" });
    }

// const storeService = req.scope.resolve("storeService") as StoreService;
    const domainService = req.scope.resolve("domainService") as DomainService;
    const products = await domainService.fetchProductsByDomain(domain as string);

    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
