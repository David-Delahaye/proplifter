import { getPlantLogs } from "@/lib/db-admin";
import { auth } from "@/lib/firebase-admin";

export default async function handler(req, res) {
  try {
    const plantId = req.query.plantId;
    const { logs } = await getPlantLogs(plantId);

    res.status(200).json({ logs });
  } catch (error) {
    res.status(500).json({ error });
  }
}
