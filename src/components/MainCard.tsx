import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"

import CharacterHeader from "./character/CharacterHeader"
import Abilities from "./character/Abilities"

const MainCard = () => {
  return (
    <Card className="h-4/5 w-4/5 ">
        <CardHeader>
            <CardTitle><h1>dndsimple🐉</h1></CardTitle>
            <CardDescription><h2>a simple dnd character sheet</h2></CardDescription>
        </CardHeader>
        <CardContent>
            <CharacterHeader/>
            <Abilities/>
        </CardContent>
        <CardFooter className="text-sm text-muted-foreground">
            by alemanb
        </CardFooter>
    </Card>
  ) 
}

export default MainCard