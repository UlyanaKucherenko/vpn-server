<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\File\FileRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Storage;
use Symfony\Component\HttpFoundation\StreamedResponse;

class FileController extends Controller
{
    public function upload(FileRequest $request): JsonResponse
    {
        if ($request->file->store('images')) {
            return response()->json(['status' => true, 'message' => 'File was saved']);
        }
        return response()->json(['status' => false, 'message' => 'File was not saved'], 400);
    }

    public function download(): StreamedResponse
    {
        return Storage::download('/files/pic.png');
    }

}
