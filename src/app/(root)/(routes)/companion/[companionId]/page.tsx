
import { prisma } from "@/lib/prismadb";
import CompanionForm from "./_components/companion-form";
interface CompanionIdProps {
	params: {
		companionId: string
	}
}
const CompanionIdPage = async ({ params }: CompanionIdProps) => {
	// TODO : check subscription

	const { companionId } = await  params

	const companion = await prisma.companion.findUnique({
		where: {
			id: companionId
		}
	})

	const categories = await prisma.category.findMany();
	return (
		<div>
			<CompanionForm
			 initialDate={companion}
			 categories={categories}
			/>
		</div>
	)
}

export default CompanionIdPage
