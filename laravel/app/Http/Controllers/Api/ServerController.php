<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Server\ConnectToServerRequest;
use App\Http\Requests\Server\IndexServerRequest;
use App\Http\Requests\Server\SelectServerRequest;
use App\Http\Requests\Server\StoreServerRequest;
use App\Http\Requests\Server\UpdateServerRequest;
use App\Http\Resources\CountryServersResource;
use App\Http\Resources\ServerLongResource;
use App\Http\Resources\ServerResource;
use App\Models\Server;
use App\Services\ServerService;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\Auth;

class ServerController extends Controller
{
    public function index(IndexServerRequest $request, ServerService $serverService): AnonymousResourceCollection
    {
        $data = $request->validated();
        return ServerResource::collection($serverService->getAll($data)->paginate(7));
    }

    public function store(StoreServerRequest $request, ServerService $serverService): JsonResponse
    {
        $data = $request->validated();
        if ($serverService->storeServer($data)) {
            return response()->json(['status' => true, 'message' => 'Server was created']);
        }
        return response()->json(['status' => false, 'message' => 'Server was not created'], 400);
    }

    public function update(UpdateServerRequest $request, Server $server, ServerService $serverService): JsonResponse
    {
        $data = $request->validated();
        if ($serverService->updateServer($server->id, $data)) {
            return response()->json(['status' => true, 'message' => 'Server was updated']);
        }
        return response()->json(['status' => false, 'message' => 'Server was not updated'], 400);
    }

    public function destroy(Server $server): JsonResponse
    {
        if ($server->delete()) {
            return response()->json(['status' => true, 'message' => 'Server was deleted']);
        }
        return response()->json(['status' => false, 'message' => 'Server was not deleted'], 400);
    }

    public function connectToServer(ConnectToServerRequest $request, ServerService $serverService): JsonResponse
    {
        if ($serverService->connect($request->validated('serverId'), Auth::id())) {
            return response()->json(['status' => true, 'message' => 'Successful connect to server']);
        }
        return response()->json(['status' => false, 'message' => 'Dont connect to server'], 400);
    }

    public function disconnectToServer(ServerService $serverService): JsonResponse
    {
        if ($serverService->disconnect(Auth::id())) {
            return response()->json(['status' => true, 'message' => 'Successful disconnect to server']);
        }
        return response()->json(['status' => false, 'message' => 'Dont disconnect to server'], 400);
    }

    public function serversForUser(ServerService $serverService): JsonResponse
    {
        $allServers = CountryServersResource::collection($serverService->getAllForUser()->get());
        $selectedServers = ServerLongResource::collection($serverService->getSelectedForUser(Auth::id())->get());
        $recentServers = ServerLongResource::collection($serverService->getRecentForUser(Auth::id())->get());

        return response()->json([
            'allServers' => $allServers,
            'selectedServers' => $selectedServers,
            'recentServers' => $recentServers,
        ]);
    }

    public function selectServer(SelectServerRequest $request, ServerService $serverService): JsonResponse
    {
        $selected = $serverService->selectServer(Auth::id(), $request->validated('serverId'));
        if ($selected) {
            return response()->json(['status' => true, 'message' => 'Server was ' . $selected]);
        }
        return response()->json(['status' => false, 'message' => 'Dont disconnect to server'], 400);
    }
}
