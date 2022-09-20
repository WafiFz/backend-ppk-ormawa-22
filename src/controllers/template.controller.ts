import { NextFunction, Request, Response } from 'express';
import TemplateService from '@services/template.service';

class TemplateController {
  public templateService = new TemplateService();
}

export default TemplateController;
