<?php

require_once('D:/PHPExcel_1.8.0_doc/Classes/PHPExcel.php');

$excelFile = "TabulatedSLA.xlsx";

$pathInfo = pathinfo($excelFile);
$type = $pathInfo['extension'] == 'xlsx' ? 'Excel2007' : 'Excel5';

$objReader = PHPExcel_IOFactory::createReader($type);
$objPHPExcel = $objReader->load($excelFile);

foreach ($objPHPExcel->getWorksheetIterator() as $worksheet) {
    $worksheets[$worksheet->getTitle()] = $worksheet->toArray();
}

print_r($worksheets);

?>