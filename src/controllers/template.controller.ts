import { NextFunction, Request, Response } from 'express';
import TemplateService from '@services/template.service';

class TemplateController {
  public tempalteService = new TemplateService();
}

export default TemplateController;
