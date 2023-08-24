import { Controller,Get } from "@nestjs/common";

@Controller()
class AppController{
    @Get()
    getData(){
        return "The data is returned with proper file systems";
    }
}

export default AppController;