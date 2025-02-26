import { Label } from "../ui/label";
import { Input } from "../ui/input";

const CharacterHeader = () => {
  return (
    <div className = "flex gap-4">
        <div>
          <Label htmlFor="name">name</Label>
          <Input type="name" id="name" placeholder="name"/>
        </div>
        <div className="col-span-2 grid 
        md:grid-cols-3
        grid-cols-2 grid-rows-2
        gap-1.5">
          <div>
            <Label htmlFor="level">level</Label>
            <Input type="level" id="level" placeholder="level" className="min-w-20"/>
          </div>
          <div>
            <Label htmlFor="background">background</Label>
            <Input type="background" id="background" placeholder="background"/>
          </div>
          <div>
            <Label htmlFor="playerName">player</Label>
            <Input type="playerName" id="playerName" placeholder="player name"/>
          </div>
          <div>
            <Label htmlFor="race">race</Label>
            <Input type="race" id="race" placeholder="race"/>
          </div>
          <div>
            <Label htmlFor="alignment">alignment</Label>
            <Input type="alignment" id="alignment" placeholder="alignment"/>
          </div>
          <div>
            <Label htmlFor="exp">xp</Label>
            <Input type="exp" id="exp" placeholder="experience"/>
          </div>
        </div>
        <div className="col-span-2"></div>

    </div>
  )
}

export default CharacterHeader;