import Title from "@/components/ui/Title";
import Link from "next/link";
import { GithubGraph } from "@/components/ui/github";

export default function GitGraph() {
    return (
        <div className="w-full flex flex-col items-center mt-8 mb-4 gap-4 max-sm:hidden">
            <Title title="GitHub Contributions" />
            <Link href={'https://github.com/AVAHC4'} target="_blank">
                <GithubGraph
                    username="AVAHC4"
                    blockMargin={3}
                />
            </Link>
        </div>
    )
}